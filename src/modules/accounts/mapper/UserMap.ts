import { instanceToInstance } from 'class-transformer';

import { IUsersResponseDTO } from '@modules/dtos/IUsersResponseDTO';

import { User } from '../infra/typeorm/entities/User';

class UserMap {
  static toDTO({
    email, name, id, avatar, driver_license, avatar_url,
  }: User): IUsersResponseDTO {
    const user = instanceToInstance({
      email,
      name,
      id,
      avatar,
      driver_license,
      avatar_url,
    });
    return user;
  }
}

export { UserMap };
