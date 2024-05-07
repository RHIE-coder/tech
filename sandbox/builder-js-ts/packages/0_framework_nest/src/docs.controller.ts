import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Query,
  Body,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('docs')
export class DocsController {
  @Get('code')
  @HttpCode(204)
  httpCode() {
    return 'check http code';
  }

  @Get('header')
  @Header('Cache-Control', 'none')
  headers() {
    return 'check headers';
  }

  @Get('google')
  @Header('Cache-Control', 'none')
  @Redirect('https://www.google.com', 301)
  naver() {
    return 'is it save!?';
  }

  @Post('echo')
  echo(@Query('version') version: number, @Req() request: Request) {
    return {
      version,
      isCorrectType: typeof version === 'number',
      data: request.body,
    };
  }

  @Post('echo2')
  echo2(@Body() body, @Body('sample') sample) {
    return { ...body, sample: sample };
  }
}
