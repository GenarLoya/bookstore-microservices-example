import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 25,
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      age: 30,
    },
  ];

  findAll() {
    return this.users;
  }
}
