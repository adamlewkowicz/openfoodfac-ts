import { Product } from 'types/product';

export interface CategoryResponse {
  page_size: number;
  page: string;
  products: Product[];
  skip: number;
  count: number;
}