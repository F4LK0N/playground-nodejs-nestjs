import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryAddDto } from './dto/category-add.dto';
import { CategoryEditDto } from './dto/category-edit.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  list() {
    return this.categoriesService.list();
  }

  @Get(':id')
  view(@Param('id') id: string) {
    return this.categoriesService.view(+id);
  }

  @Post()
  add(@Body() dto: CategoryAddDto) {
    return this.categoriesService.add(dto);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() dto: CategoryEditDto) {
    return this.categoriesService.edit(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
