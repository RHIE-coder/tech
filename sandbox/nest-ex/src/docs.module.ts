import { Module } from '@nestjs/common';
import { DocsController } from './docs.module';

@Module({
 controllers: [
    DocsController,
 ],
})
export class DocsModule {}
