import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { PostUser } from './dto/post-user.dto';
import { DogsService } from 'src/dogs/dogs.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private dogsService: DogsService,
  ) {}

  @Get()
  getAll() {
    console.log('GET:controller');
    return this.usersService.findAll();
  }

  @Get('/pet')
  introMyPet(@Query('name') name: string) {
    return this.dogsService.greeting(name);
  }

  @Post()
  post(@Body() dto: PostUser) {
    console.log('POST:controller');
    console.log(dto);
    return this.usersService.create(dto);
  }
}
