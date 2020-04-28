# openfoodfac-ts

Open Food Facts Api written in TypeScript 🥫🍕🍼

## Getting started

### Installation 💿
`npm i openfoodfac-ts`

### Usage 🛠️

```ts
import { OpenFoodFactsApi } from 'openfoodfac-ts';

const foodFactsApi = new OpenFoodFactsApi();

const product = await foodFactsApi.findProductByBarcode('58918274712');
```

### Usage with config 🛠️

```ts
import { OpenFoodFactsApi } from 'openfoodfac-ts';

const foodFactsApiPl = new OpenFoodFactsApi({
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

const product = await foodFactsApiPl.findProductByBarcode('58918274712');
```

## API
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
}
```

## License
[MIT](LICENSE)
