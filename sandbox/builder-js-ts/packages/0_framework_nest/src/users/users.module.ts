import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { InMemoryStorage } from '#storage/in-memory.storage';
import { UsersDao } from './dao/users.dao';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryStorage, UsersDao],
})
export class UsersModule {}
