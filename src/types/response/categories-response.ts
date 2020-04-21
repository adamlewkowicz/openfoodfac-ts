
export interface CategoriesResponse {
  tags: Tag[];
  count: number;
}

export interface Tag {
  products: number;
  url: string;
  known: number;
  id: string;
  name: string;
  sameAs?: string[];
}