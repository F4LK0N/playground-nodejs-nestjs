import { PartialType } from '@nestjs/mapped-types';
import { CategoryAddDto } from './category-add.dto';

export class CategoryEditDto extends PartialType(CategoryAddDto) {
  id: string;
  url: string;
  name: string;
}
