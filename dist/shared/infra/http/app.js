"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
require("reflect-metadata");
require("dotenv/config");
require("express-async-errors");
require("@shared/container");
var _upload = _interopRequireDefault(require("@config/upload"));
var _AppError = require("@shared/errors/AppError");
var _routes = require("@shared/infra/http/routes");
var _typeorm = _interopRequireDefault(require("@shared/infra/typeorm"));
var _swagger = _interopRequireDefault(require("../../../swagger.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _typeorm.default)('database');
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use('/avatar', _express.default.static(`${_upload.default.tmpFolder}/avatar`));
app.use('/cars', _express.default.static(`${_upload.default.tmpFolder}/cars`));
app.use(_routes.router);
app.use((err, req, res, next) => {
  if (err instanceof _AppError.AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }
  return res.status(500).json({
    status: 'error',
    messager: `Internal server error - ${err.message}`
  });
});