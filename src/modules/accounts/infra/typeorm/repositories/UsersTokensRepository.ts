import { getRepository, Repository } from 'typeorm';

import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { ICreateUserTokenDTO } from '@modules/dtos/ICreateUserTokenDTO';

import { UserTokens } from '../entities/UserTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    const usersToken = this.repository.findOne({
      user_id,
      refresh_token,
    });

    return usersToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersTokensRepository };