import { CategoryInterface } from '../interfaces/category.interface';

export class CreateCategoryDto implements CategoryInterface {
  id: string;
  url: string;
  name: string;
}
