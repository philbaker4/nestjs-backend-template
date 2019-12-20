import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './repository/item.repository';
import { AuthenticationMiddleware } from 'src/authentication.middleware';
@Module({
    imports: [
        TypeOrmModule.forFeature([ItemRepository]),
        ConfigModule.forRoot(),
    ],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthenticationMiddleware)
            .forRoutes(ItemsController);
    }
}
