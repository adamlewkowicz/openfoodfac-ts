import { OpenFoodFactsApi } from './index';

describe('OpenFoodFactsApi', () => {

  let openFoodFactsApi: OpenFoodFactsApi;

  beforeEach(() => {
    openFoodFactsApi = new OpenFoodFactsApi({
      country: 'world',
      userAgent: 'Mozilla/5.0 ...'
    });
  });

  describe('findProductByBarcode()', () => {

    it('should return product object', async () => {
      const ean = '5900512300108';
      const product = await openFoodFactsApi.findProductByBarcode(ean);
    
      expect(typeof product).toBe('object');
    });

  });

});