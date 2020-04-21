import * as ApiTypes from './types';
import { fetchify } from './fetchify';

interface Options {
  /** @default world */
  country: string
  userAgent?: string
}

const defaultOptions: Options = {
  country: 'world',
}

export class OpenFoodFactsApi {
  
  private baseUrl: string;

  private country: string;

  private userAgent?: string;

  constructor(options: Partial<Options> = defaultOptions) {
    const mergedOptions = {
      ...defaultOptions,
      ...options
    };

    this.userAgent = mergedOptions.userAgent;
    this.country = mergedOptions.country;
    this.baseUrl = `https://${this.country}.openfoodfacts.org`;
  }

  async findProductByBarcode(
    barcode: string,
    controller?: AbortController
  ): Promise<ApiTypes.Product | null> {

    const response = await this.request<ApiTypes.ProductResponse>(
      `/api/v0/product/${barcode}`,
      controller
    );

    return response?.product ?? null;
  }

  async findProductsBySearchTerm(
    searchTerm: string,
    page = 1,
    controller?: AbortController,
  ): Promise<ApiTypes.ProductsResponse | null> {
    const parsedTerm = encodeURIComponent(searchTerm);

    const response = await this.request<ApiTypes.ProductsResponse>(
      `/cgi/search.pl?search_terms=${parsedTerm}&page=${page}&search_simple=1&action=process&json=1`,
      controller
    );

    return response;
  }

  async findProductsByBrand(
    brandName: string,
    page = 1,
    controller?: AbortController
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/brand/${brandName}/${page}`, controller);
  }
  
  async findProductsByCategory(
    category: string,
    page = 1,
    controller?: AbortController
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/category/${category}/${page}`, controller);
  }

  async findCategories(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request(`/categories`, controller);
  }

  async findCountries(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/countries', controller);
  }

  async findIngredients(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/ingredients', controller);
  }

  async findPackagings(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/packaging', controller);
  }

  async findPackagingCodes(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/packager-codes', controller);
  }

  async findPurchasePlaces(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/purchase-places', controller);
  }

  async findStates(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/states', controller);
  }

  async findTraces(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/traces', controller);
  }

  async findEntryDates(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/entry-dates', controller);
  }

  async findAllergens(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/allergens', controller);
  }

  async findAdditives(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/additives', controller);
  }

  async findLanguages(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/languages', controller);
  }

  async findBrands(
    controller?: AbortController
  ): Promise<ApiTypes.TagsResponse> {
    return this.request('/brands', controller);
  }

  private async request<T extends object>(
    apiPath: string,
    controller?: AbortController,
  ): Promise<T> {
    const headers = this.userAgent ? { 'User-Agent': this.userAgent } : undefined;

    return fetchify<T>(
      `${this.baseUrl}${apiPath}.json`,
      { headers },
      controller,
    );
  }

}

export default OpenFoodFactsApi;

export { ApiTypes };