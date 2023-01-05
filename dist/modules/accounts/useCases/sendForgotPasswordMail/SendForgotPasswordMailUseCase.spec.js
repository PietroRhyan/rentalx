"use strict";

var _UsersRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersRepositoryInMemory");
var _UsersTokensRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory");
var _DayJsDateProvider = require("@shared/container/providers/DateProvider/implementations/DayJsDateProvider");
var _MailProviderInMemory = require("@shared/container/providers/MailProvider/in-memory/MailProviderInMemory");
var _AppError = require("@shared/errors/AppError");
var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");
let sendForgotPasswordMailUseCase;
let usersReposiotryInMemory;
let usersTokensRepositoryInMemory;
let dateProvider;
let mailProvider;
describe('Send Forgot Mail', () => {
  beforeEach(() => {
    usersReposiotryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dateProvider = new _DayJsDateProvider.DayJsDateProvider();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersReposiotryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProvider);
  });
  it('should be able to send a forgot password mail to user', async () => {
    const sendMail = jest.spyOn(mailProvider, 'sendMail');
    await usersReposiotryInMemory.create({
      driver_license: '12345',
      email: 'ola@gmail.com',
      name: 'Test Name',
      password: 'teste123'
    });
    await sendForgotPasswordMailUseCase.execute('ola@gmail.com');
    expect(sendMail).toHaveBeenCalled();
  });
  it('should not be able to send an email if user does not exists', async () => {
    await expect(sendForgotPasswordMailUseCase.execute('djdaksjdh@gmail.com')).rejects.toEqual(new _AppError.AppError('User does not exists!'));
  });
  it('should be able to create a users token', async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, 'create');
    await usersReposiotryInMemory.create({
      driver_license: '71829',
      email: 'ola2@gmail.com',
      name: 'Test Name 2',
      password: 'teste123'
    });
    await sendForgotPasswordMailUseCase.execute('ola2@gmail.com');
    expect(generateTokenMail).toHaveBeenCalled();
  });
});