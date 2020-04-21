import * as ApiTypes from './types';

interface Options {
  /** @default world */
  country: string
  userAgent?: string
}

const defaultOptions: Options = {
  country: 'world',
}

export class OpenFoodFactsApi {
  
  URL: string;

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
    this.URL = `https://${this.country}.openfoodfacts.org`;
  }

  async fetchify<T>(...args: any[]): Promise<T> {

  }

  async findByBarcode(
    barcode: string,
    controller?: AbortController
  ): Promise<ApiTypes.Product | null> {

    const response = await this.fetchify<ApiTypes.ResponseEan>(
      `${this.URL}/api/v0/product/${barcode}.json`,
      { headers: { 'User-Agent': this.userAgent }},
      controller
    );

    if (
      response.status === this.notFoundStatus ||
      response.product == null
    ) {
      return null;
    }

    return response.product;
  }

  async findByCategory(
    category: string,
    page = 1,
    controller?: AbortController
  ): Promise<unknown> {

    const response = await this.fetchify(
      `${this.URL}/category/${category}/${page}.json`,
      { headers: { 'User-Agent': this.userAgent }},
      controller
    );

    return response;
  }

}

export default OpenFoodFactsApi;