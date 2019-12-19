import { Get, Post, Body, Controller, Param, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item';
import { Item } from './entity/item.entity';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAll(): Promise<Item[]> {
    return this.itemsService.getAllItems();
  }
  
  @Get('/:id')
  findItem(@Param('id', ParseIntPipe) id: number): Promise<Item> {
      return this.itemsService.find(id)
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() item: CreateItemDto): Promise<Item> {
    return this.itemsService.create(item);
  }
}