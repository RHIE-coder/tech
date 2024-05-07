import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Req() request: Request): string {
    const info = request.body;
    return `your information is (${info.name} | ${info.age})`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
