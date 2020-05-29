import { EntityRepository, Repository } from "typeorm";
import { Item } from "../entity/item.entity";
import { CreateItemDto } from "../dto/create-item";
import { NotFoundException } from "@nestjs/common";


@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

    async getItems(): Promise<Item[]> {
        const query = this.createQueryBuilder('item');
        const items = await query.getMany();
        return items;
    }

    async findItem(id: number): Promise<Item> {
        const found = await this.findOne(id);
        if (!found) {
            throw new NotFoundException(`Item with id ${id} not found.`);
        }
        return found;
    }
    async createItem(createItemDto: CreateItemDto): Promise<Item> {
        const item = new Item();
        item.name = createItemDto.name;
        await item.save();
        return item;
    }
}