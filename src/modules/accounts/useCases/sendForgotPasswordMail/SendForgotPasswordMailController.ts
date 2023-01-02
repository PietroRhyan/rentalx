import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordMailUseCase } from './SendForgotPasswordMailUseCase';

class SendForgotPasswordMailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPOasswordMailUseCase = container.resolve(SendForgotPasswordMailUseCase);

    await sendForgotPOasswordMailUseCase.execute(email);

    return res.send();
  }
}

export { SendForgotPasswordMailController };
