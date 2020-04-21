import { OpenFoodFactsApi } from './index';
import openFoodFactsResponseMock from './__mocks__/response.json';

describe('OpenFoodFactsApi', () => {

  let openFoodFactsApi: OpenFoodFactsApi;

  beforeEach(() => openFoodFactsApi = new OpenFoodFactsApi());

  describe('findByBarcode()', () => {

    it('should normalize product correctly 📝', async () => {
      const barcode = '5900512300108';
      const fetchMock = fetch as jest.Mock;
    
      fetchMock.mockImplementationOnce(async () => ({
        ok: true,
        json: async () => openFoodFactsResponseMock
      }));
    
      const normalizedProduct = await openFoodFactsApi.findByBarcode(barcode);
    
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(normalizedProduct).toMatchSnapshot();
    });

  });

});