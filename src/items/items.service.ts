import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './entity/item.entity';
import { CreateItemDto } from './dto/create-item';
import { ItemRepository } from './repository/item.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
    
    constructor(
        @InjectRepository(ItemRepository) 
        private itemRepository: ItemRepository,
    ) {}

    async getAllItems(): Promise<Item[]> {
        const query = this.itemRepository.createQueryBuilder('item');
        const items = await query.getMany();
        return items;
    }

    async find(id: number): Promise<Item> {
        const found = await this.itemRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Item with id ${id} not found.`);
        }

        return found;
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        return this.itemRepository.createItem(createItemDto);
    }

}