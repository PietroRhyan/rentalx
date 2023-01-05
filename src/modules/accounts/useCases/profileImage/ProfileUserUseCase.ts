import { inject, injectable } from 'tsyringe';

import { UserMap } from '@modules/accounts/mapper/UserMap';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersResponseDTO } from '@modules/dtos/IUsersResponseDTO';

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUsersResponseDTO> {
    const user = await this.usersRepository.findById(id);
    return UserMap.toDTO(user);
  }
}

export { ProfileUserUseCase };
