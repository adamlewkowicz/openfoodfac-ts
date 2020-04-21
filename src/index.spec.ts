import { OpenFoodFactsApi } from './index';
import openFoodFactsResponseMock from './__mocks__/response.json';

describe('OpenFoodFactsApi', () => {

  let openFoodFactsApi: OpenFoodFactsApi;

  beforeEach(() => openFoodFactsApi = new OpenFoodFactsApi());

  describe('findOneByEan()', () => {

    it('should normalize product correctly 📝', async () => {
      const ean = '5900512300108';
      const fetchMock = fetch as jest.Mock;
    
      fetchMock.mockImplementationOnce(async () => ({
        ok: true,
        json: async () => openFoodFactsResponseMock
      }));
    
      const product = await openFoodFactsApi.findOneByBarcode(ean);
    
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(product).toMatchSnapshot();
    });

  });

});