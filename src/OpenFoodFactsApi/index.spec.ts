import { OpenFoodFactsApi } from './index';
import productResponse from './__mocks__/response.json';

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

    it('should return product object', async () => {
      const ean = '5900512300108';
      const product = await openFoodFactsApi.findProductByBarcode(ean);
    
      expect(typeof product).toBe('object');
    });

  });

});