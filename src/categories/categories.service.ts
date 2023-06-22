import { Injectable } from '@nestjs/common';
import { CategoryInterface } from './interfaces/category.interface';
import { CategoryAddDto } from './dto/category-add.dto';
import { CategoryEditDto } from './dto/category-edit.dto';

@Injectable()
export class CategoriesService {
  private readonly categories: CategoryInterface[] = [];

  list() {
    return this.categories;
  }

  view(id: number) {
    return this.categories[id - 1];
  }

  add(dto: CategoryAddDto) {
    dto.id = '' + (this.categories.length + 1);
    dto.url = 'url-test-' + dto.id;
    dto.name = 'Name Test ' + dto.id;
    this.categories.push(dto);
    return this.categories;
  }

  edit(id: number, dto: CategoryEditDto) {
    const dbo: CategoryInterface = this.categories[id - 1];
    dbo.url = 'edited ' + dto.url;
    dbo.name = 'edited ' + dto.name;
    this.categories[id - 1] = dbo;
    return dbo;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
