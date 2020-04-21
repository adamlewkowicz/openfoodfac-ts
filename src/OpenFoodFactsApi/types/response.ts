import { Product } from './product';
import { Tag } from './tag';

export interface ProductResponse {
  status?: number;
  code?: string;
  status_verbose?: string;
  product?: Product
}

export interface ProductsResponse {
  products: Product[];
  skip: number;
  count: number;
  page_size: number;
  page: number;
}

export interface TagsResponse {
  tags: Tag[];
  count: number;
}