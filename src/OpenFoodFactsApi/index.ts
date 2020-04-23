import * as ApiTypes from './types';
import { fetchify } from '../fetchify';

interface Options {
  /**
   * Country id.
   * List of countries https://world.openfoodfacts.org/countries.
   * @default 'world'
   */
  country: string
  /**
   * User Agent used while requesting the API.
   */
  userAgent?: string
  /**
   * AbortController instance used while requesting the API.
   * Allows you to cancel request at any time.
   */
  abortController?: AbortController
}

export class OpenFoodFactsApi {
  
  private baseUrl: string;
  private country: string;
  private userAgent?: string;
  private abortController?: AbortController;

  constructor(options: Partial<Options> = DEFAULT_OPTIONS) {
    const mergedOptions = {
      ...DEFAULT_OPTIONS,
      ...options
    };

    this.userAgent = mergedOptions.userAgent;
    this.country = mergedOptions.country;
    this.abortController = mergedOptions.abortController;
    this.baseUrl = `https://${this.country}.openfoodfacts.org`;
  }

  async findProductByBarcode(barcode: string): Promise<ApiTypes.Product | null> {
    const response = await this.request<ApiTypes.ProductResponse>(`/api/v0/product/${barcode}`);

    return response?.product ?? null;
  }

  async findProductsBySearchTerm(
    searchTerm: string,
    page = 1,
  ): Promise<ApiTypes.ProductsResponse> {
    const parsedTerm = encodeURIComponent(searchTerm);

    const response = await this.request<ApiTypes.ProductsResponse>(
      `/cgi/search.pl?search_terms=${parsedTerm}&page=${page}&search_simple=1&action=process&json=1`
    );

    return response;
  }

  async findProductsByBrand(
    brandName: string,
    page = 1,
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/brand/${brandName}/${page}`);
  }
  
  async findProductsByCategory(
    category: string,
    page = 1,
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/category/${category}/${page}`);
  }

  async findCategories(): Promise<ApiTypes.TagsResponse> {
    return this.request(`/categories`);
  }

  async findCountries(): Promise<ApiTypes.TagsResponse> {
    return this.request('/countries');
  }

  async findIngredients(): Promise<ApiTypes.TagsResponse> {
    return this.request('/ingredients');
  }

  async findPackagings(): Promise<ApiTypes.TagsResponse> {
    return this.request('/packaging');
  }

  async findPackagingCodes(): Promise<ApiTypes.TagsResponse> {
    return this.request('/packager-codes');
  }

  async findPurchasePlaces(): Promise<ApiTypes.TagsResponse> {
    return this.request('/purchase-places');
  }

  async findStates(): Promise<ApiTypes.TagsResponse> {
    return this.request('/states');
  }

  async findTraces(): Promise<ApiTypes.TagsResponse> {
    return this.request('/traces');
  }

  async findEntryDates(): Promise<ApiTypes.TagsResponse> {
    return this.request('/entry-dates');
  }

  async findAllergens(): Promise<ApiTypes.TagsResponse> {
    return this.request('/allergens');
  }

  async findAdditives(): Promise<ApiTypes.TagsResponse> {
    return this.request('/additives');
  }

  async findLanguages(): Promise<ApiTypes.TagsResponse> {
    return this.request('/languages');
  }

  async findBrands(): Promise<ApiTypes.TagsResponse> {
    return this.request('/brands');
  }

  private async request<T extends object>(apiPath: string): Promise<T> {
    const headers = this.userAgent ? { 'User-Agent': this.userAgent } : undefined;

    return fetchify<T>(
      `${this.baseUrl}${apiPath}.json`,
      { headers },
      this.abortController,
    );
  }

  setController(abortController?: AbortController): this {
    this.abortController = abortController;
    return this;
  }

}

const DEFAULT_OPTIONS: Options = {
  country: 'world',
}