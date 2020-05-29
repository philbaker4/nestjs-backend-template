import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './repository/item.repository';
import { AuthenticationMiddleware } from '@/auth/authentication.middleware';
@Module({
    imports: [
        TypeOrmModule.forFeature([ItemRepository]),
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
