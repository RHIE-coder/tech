import { User } from '#users/interfaces/users.interfaces';
import { InMemoryStorage } from '#storage/in-memory.storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersDao {
  constructor(private storage: InMemoryStorage<User>) {}

  create(user: User) {
    this.storage.set(user);
  }

  findAll(): User[] {
    return this.storage.getAll();
  }
}
