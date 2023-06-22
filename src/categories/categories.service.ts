import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryInterface } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private readonly categories: CategoryInterface[] = [];

  create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.id   = '' + (this.categories.length + 1);
    createCategoryDto.url  = 'url-test-' + createCategoryDto.id;
    createCategoryDto.name = 'Name Test ' + createCategoryDto.id;
    this.categories.push(createCategoryDto);
    return this.categories;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    return this.categories[id - 1];
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
