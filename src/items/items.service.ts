import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    find(name: string): Item {
        const found = this.items.find(item => item.name === name);
        if (!found) {
            throw new NotFoundException(`Item with name ${name} not found.`);
        }
        return found;
    }


    create(item: CreateItemDto): Item {
        const newItem: Item = {
            name: item.name,
        };
        this.items.push(newItem);
        return newItem;
    }
}