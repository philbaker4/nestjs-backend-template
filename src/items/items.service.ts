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
        return this.itemRepository.getItems();
    }

    async find(id: number): Promise<Item> {
       return this.itemRepository.findItem(id);
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        return this.itemRepository.createItem(createItemDto);
    }

}