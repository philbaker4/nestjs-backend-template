import { Get, Post, Body, Controller, Param, ValidationPipe, UsePipes, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item';
import { Item } from './entity/item.entity';
import { GetUser } from '@/auth/get-user.decorator';
import { Roles } from '@/auth/roles.decorator';
import { RolesGuard } from '@/auth/roles.guard';
import { Permissions } from '@/auth/permissions.decorator';
import { PermissionsGuard } from '@/auth/permissions.guard';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @Roles('mtmproGlobalAdmin')
  @UseGuards(RolesGuard)
  async getAll(@GetUser() user: any): Promise<Item[]> {
    return this.itemsService.getAllItems();
  }

  @Get('/:id')
  @Permissions('create:garmentType')
  @UseGuards(PermissionsGuard)
  findItem(@Param('id', ParseIntPipe) id: number): Promise<Item> {
      return this.itemsService.find(id);
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() item: CreateItemDto): Promise<Item> {
    return this.itemsService.create(item);
  }
}
