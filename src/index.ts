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

  async findOneByBarcode(
    barcode: string,
    controller?: AbortController
  ): Promise<ApiTypes.Product | null> {

    const response = await this.request<ApiTypes.ProductResponse>(
      `/api/v0/product/${barcode}.json`,
      controller
    );

    return response?.product ?? null;
  }

  async findByBrand(
    brandName: string,
    page = 1,
    controller?: AbortController
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/brand/${brandName}/${page}.json`, controller);
  }
  
  async findByCategory(
    category: string,
    page = 1,
    controller?: AbortController
  ): Promise<ApiTypes.ProductsResponse> {
    return this.request(`/category/${category}/${page}.json`, controller);
  }

  async findCategories(
    controller?: AbortController
  ): Promise<ApiTypes.CategoriesResponse> {
    return this.request(`/categories.json`, controller);
  }

  async findCountries(
    controller?: AbortController
  ): Promise<ApiTypes.FindCountriesResponse> {
    return this.request('/countries.json', controller);
  }

  async findIngredients(
    controller?: AbortController
  ): Promise<ApiTypes.FindIngredientsResponse> {
    return this.request('/ingredients.json', controller);
  }

  async findPackagings(
    controller?: AbortController
  ): Promise<ApiTypes.FindPackagingsResponse> {
    return this.request('/packaging.json', controller);
  }

  async findPackagingCodes(
    controller?: AbortController
  ): Promise<ApiTypes.FindPackagingCodesResponse> {
    return this.request('/packager-codes.json', controller);
  }

  async findPurchasePlaces(
    controller?: AbortController
  ): Promise<ApiTypes.FindPurchasePlacesResponse> {
    return this.request('/purchase-places.json', controller);
  }

  async findStates(
    controller?: AbortController
  ): Promise<ApiTypes.FindStatesResponse> {
    return this.request('/states.json', controller);
  }

  async findTraces(
    controller?: AbortController
  ): Promise<ApiTypes.FindTracesResponse> {
    return this.request('/traces.json', controller);
  }

  async findEntryDates(
    controller?: AbortController
  ): Promise<ApiTypes.FindEntryDatesResponse> {
    return this.request('/entry-dates.json', controller);
  }

  async findAllergens(
    controller?: AbortController
  ): Promise<ApiTypes.FindAllergensResponse> {
    return this.request('/allergens.json', controller);
  }

  async findAdditives(
    controller?: AbortController
  ): Promise<ApiTypes.FindAdditivesResponse> {
    return this.request('/additives.json', controller);
  }

  async findLanguages(
    controller?: AbortController
  ): Promise<ApiTypes.FindLanguagesResponse> {
    return this.request('/languages.json', controller);
  }

  async findBrands(
    controller?: AbortController
  ): Promise<ApiTypes.FindBrandsResponse> {
    return this.request('/brands.json', controller);
  }

  private async request<T extends object>(
    apiPath: string,
    controller?: AbortController,
  ): Promise<T> {
    const headers = this.userAgent ? { 'User-Agent': this.userAgent } : undefined;

    return fetchify<T>(
      `${this.baseUrl}${apiPath}`,
      { headers },
      controller,
    );
  }

}

export default OpenFoodFactsApi;