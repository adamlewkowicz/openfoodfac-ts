import { OpenFoodFactsApi as NativeOpenFoodFactsApi } from '../src/OpenFoodFactsApi';
import productResponse from '../src/OpenFoodFactsApi/__mocks__/product-response.json';
import productsResponse from '../src/OpenFoodFactsApi/__mocks__/products-response.json';
import tagsResponse from '../src/OpenFoodFactsApi/__mocks__/tags-response.json';

const getProductResponse = async () => productResponse;
const getProductsResponse = async () => productsResponse;
const getTagsResponse = async () => tagsResponse;

// @ts-ignore
export class OpenFoodFactsApi implements NativeOpenFoodFactsApi {

  findProductsBySearchTerm = getProductsResponse;

}