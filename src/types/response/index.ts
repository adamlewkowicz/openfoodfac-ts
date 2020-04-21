import { Product } from 'types/product';

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
interface Tag {
  url: string;
  products: number;
  known: number;
  name: string;
  id: string;
  sameAs?: string[];
}