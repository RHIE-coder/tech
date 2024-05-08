import { Injectable } from '@nestjs/common';
import { UsersDao } from './dao/users.dao';
import { PostUser } from './dto/post-user.dto';
import { User } from './interfaces/users.interfaces';

@Injectable()
export class UsersService {
  constructor(private usersDao: UsersDao) {}

  findAll(): User[] {
    console.log('GET:service:findAll');
    return this.usersDao.findAll();
  }

  create(dto: PostUser) {
    console.log('POST:service:create');
    const model: User = {
      ...dto,
      createDate: new Date(Date.now()),
    };
    console.log(model);
    this.usersDao.create(model);
  }
}
