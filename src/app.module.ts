import { Module, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthenticationMiddleware } from './auth/authentication.middleware';


const ormConfig = require( '../ormconfig')

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => (ormConfig),
    }),
    forwardRef(() => ItemsModule),
    AuthModule,
    ConfigModule.forRoot(),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthenticationMiddleware)
        .forRoutes(AppController);
}
}
