import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '#users/users.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, DogsModule],
})
export class AppModule {}
