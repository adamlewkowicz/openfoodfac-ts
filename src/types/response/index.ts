import { Product } from 'types/product';

export * from './categories-response';
export * from './category-response';

export interface FindCountriesResponse extends TagsResponse {}

export interface FindIngredientsResponse extends TagsResponse {}

export interface FindPackagingsResponse extends TagsResponse {}

export interface FindPackagingCodesResponse extends TagsResponse {}

export interface FindPurchasePlacesResponse extends TagsResponse {}

export interface FindStatesResponse extends TagsResponse {}

export interface FindStoresResponse extends TagsResponse {}

export interface FindTracesResponse extends TagsResponse {}

export interface FindEntryDatesResponse extends TagsResponse {}

export interface FindAllergensResponse extends TagsResponse {}

export interface FindAdditivesResponse extends TagsResponse {}

export interface FindLanguagesResponse extends TagsResponse {}

export interface FindBrandsResponse extends TagsResponse {}

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

export interface Tag {
  url: string;
  products: number;
  known: number;
  name: string;
  id: string;
  sameAs?: string[];
}