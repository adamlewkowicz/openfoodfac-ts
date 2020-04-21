# openfoodfac-ts

Open Food Facts Api written in TypeScript 🥫🍕🍼

## Getting started

### Installation 💿
`npm i openfoodfac-ts`

### Usage 🛠️

```ts
import { OpenFoodFactsApi } from 'openfoodfac-ts';

const foodFactsApiPl = new OpenFoodFactsApi({
  country: 'pl', // 'world' by default
  userAgent: 'Mozilla/5.0 ...'
});

const product = await foodFactsApiPl.findProductByBarcode('58918274712');
```