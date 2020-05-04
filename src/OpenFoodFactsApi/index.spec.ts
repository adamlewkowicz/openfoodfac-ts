import { OpenFoodFactsApi } from './index';
import productResponse from './__mocks__/product-response.json';
import productsResponse from './__mocks__/products-response.json';
import tagsResponse from './__mocks__/tags-response.json';

describe('OpenFoodFactsApi', () => {

  let openFoodFactsApi: OpenFoodFactsApi;

  beforeEach(() => {
    openFoodFactsApi = new OpenFoodFactsApi();
  });

  describe('findProductByBarcode()', () => {

    beforeEach(() => {
      (fetch as jest.Mock).mockImplementationOnce(() => ({
        ok: true,
        async json() {
          return productResponse;
        },
      }));
    });

    it('should return product response', async () => {
      const ean = '5900512300108';
      const product = await openFoodFactsApi.findProductByBarcode(ean);
    
      expect(product).toEqual(productResponse.product);
    });

  });

  describe('findProductsBySearchTerm()', () => {

    beforeEach(() => {
      (fetch as jest.Mock).mockImplementationOnce(() => ({
        ok: true,
        async json() {
          return productsResponse;
        },
      }));
    });
    
    it('should return products response', async () => {
      const searchTerm = 'drink';
      const products = await openFoodFactsApi.findProductsBySearchTerm(searchTerm);
      
      expect(products).toEqual(productsResponse);
    });

  });

  describe('findCategories()', () => {

    beforeEach(() => {
      (fetch as jest.Mock).mockImplementationOnce(() => ({
        ok: true,
        async json() {
          return tagsResponse;
        },
      }));
    });

    it('should return tags response', async () => {
      const categoryTags = await openFoodFactsApi.findCategories();
      
      expect(categoryTags).toEqual(tagsResponse);
    });

  });

});