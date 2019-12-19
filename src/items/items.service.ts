import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { CreateItemDTO } from './dto/create-item';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    create(item: CreateItemDTO): Item {
        const newItem: Item = {
            name: item.name,
        };
        this.items.push(newItem);
        return newItem;
    }
}