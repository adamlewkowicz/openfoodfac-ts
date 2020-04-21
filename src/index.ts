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
  
  baseUrl: string;

  country: string;

  userAgent?: string;

  notFoundStatus: 0 = 0;
  
  constructor(options: Partial<Options> = defaultOptions) {
    const mergedOptions = {
      ...defaultOptions,
      ...options
    };

    this.userAgent = mergedOptions.userAgent;
    this.country = mergedOptions.country;
    this.baseUrl = `https://${this.country}.openfoodfacts.org`;
  }

  async findOneByEan(
    barcode: string,
    controller?: AbortController
  ): Promise<ApiTypes.Product | null> {

    const response = await this.request<ApiTypes.ResponseEan>(
      `/api/v0/product/${barcode}.json`,
      controller
    );

    return response?.product ?? null;
  }

  async findByCategory(
    category: string,
    page = 1,
    controller?: AbortController
  ): Promise<unknown> {

    const response = await fetchify(
      `${this.baseUrl}/category/${category}/${page}.json`,
      { headers: { 'User-Agent': this.userAgent }},
      controller
    );

    return response;
  }

  private async request<T extends ApiTypes.BaseResponse>(
    url: string,
    controller?: AbortController,
  ): Promise<T | null> {
    const headers = this.userAgent ? { 'User-Agent': this.userAgent } : undefined;

    const response = await fetchify<T>(
      `${this.baseUrl}${url}`,
      { headers },
      controller,
    );

    if (response.status === this.notFoundStatus) {
      return null;
    }

    return response;
  }

}

export default OpenFoodFactsApi;