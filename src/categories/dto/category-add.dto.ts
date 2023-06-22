import { CategoryInterface } from '../interfaces/category.interface';

export class CategoryAddDto implements CategoryInterface {
  id: string;
  url: string;
  name: string;
}
