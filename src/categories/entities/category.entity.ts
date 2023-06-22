import { CategoryInterface } from '../interfaces/category.interface';

export class Category implements CategoryInterface {
  id: string;
  url: string;
  name: string;
}
