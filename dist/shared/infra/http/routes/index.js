"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _Authenticate = require("./Authenticate.routes");
var _Cars = require("./Cars.routes");
var _Categories = require("./Categories.routes");
var _Password = require("./Password.routes");
var _Rental = require("./Rental.routes");
var _Specifications = require("./Specifications.routes");
var _Users = require("./Users.routes");
const router = (0, _express.Router)();
exports.router = router;
router.use('/categories', _Categories.categoriesRoutes);
router.use('/specifications', _Specifications.specificationRoutes);
router.use('/users', _Users.usersRoutes);
router.use('/cars', _Cars.carsRoutes);
router.use('/rentals', _Rental.rentalRoutes);
router.use('/password', _Password.passwordRoutes);
router.use(_Authenticate.authenticateRoutes);