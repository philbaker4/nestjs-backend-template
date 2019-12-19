import { EntityRepository, Repository } from "typeorm";
import { Item } from "../entity/item.entity";
import { CreateItemDto } from "../dto/create-item";


@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
    async createItem(createItemDto: CreateItemDto): Promise<Item> {
        const item = new Item();
        item.name = createItemDto.name;
        await item.save();
        return item;
    }
}