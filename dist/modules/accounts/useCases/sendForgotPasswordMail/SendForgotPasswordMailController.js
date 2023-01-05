"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordMailController = void 0;
var _tsyringe = require("tsyringe");
var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");
class SendForgotPasswordMailController {
  async handle(req, res) {
    const {
      email
    } = req.body;
    const sendForgotPOasswordMailUseCase = _tsyringe.container.resolve(_SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase);
    await sendForgotPOasswordMailUseCase.execute(email);
    return res.send();
  }
}
exports.SendForgotPasswordMailController = SendForgotPasswordMailController;