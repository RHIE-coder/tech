import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { DocsController } from './docs.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DocsController],
  providers: [AppService],
})
export class AppModule {}
