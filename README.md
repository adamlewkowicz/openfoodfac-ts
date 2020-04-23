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