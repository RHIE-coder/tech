import {
 Controller,
 Get,
 Post,
 Req,
 HttpCode,
} from '@nestjs/common';
import { Request } from 'express';


@Controller('docs')
export class DocsController {

 @Get()
 @HttpCode(204)
 httpCode() {
  return 'check http code';
 }

}
