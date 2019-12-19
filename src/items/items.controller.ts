import { Get, Post, Body, Controller, Param, ValidationPipe, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item';
import { Item } from './item.model';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('/:name')
  findItem(@Param('name') name: string): Item {
      return this.itemsService.find(name)
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() item: CreateItemDto) {
    return this.itemsService.create(item);
  }
}