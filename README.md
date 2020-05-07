# openfoodfac-ts

[Open Food Facts](https://world.openfoodfacts.org/) Api written in TypeScript 🥫🍕🍼

![Node CI](https://github.com/alk831/openfoodfac-ts/workflows/Node%20CI/badge.svg)

## Features 🚀

- Complete TypeScript support with type-safe responses 💪
- Clean API ✨
- Mock testing ready ✔

</br>

## Getting started 🐾

### Installation 💿
`npm i openfoodfac-ts`

### Usage 🛠️

```ts
import { OpenFoodFactsApi } from 'openfoodfac-ts';

const openFoodFactsApi = new OpenFoodFactsApi();

const product = await openFoodFactsApi.findProductByBarcode('58918274712');

const countries = await openFoodFactsApi.findCountries();
```

### Usage with config 🛠️

```ts
import { OpenFoodFactsApi } from 'openfoodfac-ts';

const openFoodFactsApi = new OpenFoodFactsApi({
  /**
   * Country id.
   * List of countries https://world.openfoodfacts.org/countries.
   * @default 'world'
   */
  country: 'pl'
  /**
   * User Agent used while requesting the API.
   */
  userAgent: 'Mozilla/5.0 ...'
  /**
   * AbortController instance used while requesting the API.
   * Allows you to cancel request at any time.
   */
  abortController: new AbortController()
});

const products = await openFoodFactsApi.findProductsByCategory('vegetables');
```

### Setting abort controller dynamically
```ts
const abortController = new AbortController();

const tomatoeProducts = await openFoodFactsApi
  .setAbortController(abortController)
  .findProductsBySearchTerm('Tomatoes');
```

## API 🗺
```ts
class OpenFoodFactsApi {

    findProductByBarcode(barcode: string): Promise<ApiTypes.Product | null>;
    
    findProductsBySearchTerm(searchTerm: string, page?: number): Promise<ApiTypes.ProductsResponse>;
    
    findProductsByBrand(brandName: string, page?: number): Promise<ApiTypes.ProductsResponse>;
    
    findProductsByCategory(category: string, page?: number): Promise<ApiTypes.ProductsResponse>;
    
    findCategories(): Promise<ApiTypes.TagsResponse>;
    
    findCountries(): Promise<ApiTypes.TagsResponse>;
    
    findIngredients(): Promise<ApiTypes.TagsResponse>;
    
    findPackagings(): Promise<ApiTypes.TagsResponse>;
    
    findPackagingCodes(): Promise<ApiTypes.TagsResponse>;
    
    findPurchasePlaces(): Promise<ApiTypes.TagsResponse>;
    
    findStates(): Promise<ApiTypes.TagsResponse>;
    
    findTraces(): Promise<ApiTypes.TagsResponse>;
    
    findEntryDates(): Promise<ApiTypes.TagsResponse>;
    
    findAllergens(): Promise<ApiTypes.TagsResponse>;
    
    findAdditives(): Promise<ApiTypes.TagsResponse>;
    
    findLanguages(): Promise<ApiTypes.TagsResponse>;
    
    findBrands(): Promise<ApiTypes.TagsResponse>;
    
    setController(abortController?: AbortController): this;

    setUserAgent(userAgent?: string): this;
    
}
```

## Testing 🧰

### Usage with Jest

There is a mock version available that uses mocked json response instead of making real API calls.

To make jest use mocked version, paste below code in your `jest.setup.*` file.

```ts
jest.mock('openfoodfac-ts/OpenFoodFactsApi');
```

## License ⚖️
[MIT](LICENSE)
