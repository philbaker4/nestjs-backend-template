import { Get, Post, Body, Controller } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDTO } from './dto/create-item';
import { Item } from './item.model';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: CreateItemDTO) {
    return this.itemsService.create(item);
  }
}