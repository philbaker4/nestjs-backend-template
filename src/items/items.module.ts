import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './repository/item.repository';
@Module({
    imports: [TypeOrmModule.forFeature([ItemRepository])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule {}
