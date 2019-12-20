import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    ConfigModule.forRoot(),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
