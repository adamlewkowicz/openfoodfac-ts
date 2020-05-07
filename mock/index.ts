import { OpenFoodFactsApi as NativeOpenFoodFactsApi } from '../src/OpenFoodFactsApi';
import productResponse from '../src/OpenFoodFactsApi/__mocks__/product-response.json';
import productsResponse from '../src/OpenFoodFactsApi/__mocks__/products-response.json';
import tagsResponse from '../src/OpenFoodFactsApi/__mocks__/tags-response.json';

const getProductResponse = () => jest.fn(async () => productResponse) as any;
const getProductsResponse = () => jest.fn(async () => productsResponse) as any;
const getTagsResponse = () => jest.fn(async () => tagsResponse);

// @ts-ignore
export class OpenFoodFactsApi implements NativeOpenFoodFactsApi {

  findProductByBarcode = getProductResponse();

  findProductsBySearchTerm = getProductsResponse();
  findProductsByBrand = getProductsResponse();
  findProductsByCategory = getProductsResponse();

  findAdditives = getTagsResponse();
  findAllergens = getTagsResponse();
  findBrands = getTagsResponse();
  findCategories = getTagsResponse();
  findCountries = getTagsResponse();
  findEntryDates = getTagsResponse();
  findIngredients = getTagsResponse();
  findLanguages = getTagsResponse();
  findPackagingCodes = getTagsResponse();
  findPackagings = getTagsResponse();
  findPurchasePlaces = getTagsResponse();
  findStates = getTagsResponse();
  findTraces = getTagsResponse();

  setController = jest.fn();
  setUserAgent = jest.fn();

}