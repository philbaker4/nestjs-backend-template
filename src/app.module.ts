import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Item } from './items/entity/item.entity';


const ormConfig = require( '../ormconfig')
ormConfig.entities = [
 Item
]
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => (ormConfig),
    }),
    ItemsModule,
    AuthModule,
    ConfigModule.forRoot(),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
