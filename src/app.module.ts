import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
