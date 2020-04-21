
export interface Product {
  ingredients_text_pl: string;
  image_nutrition_thumb_url: string;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  pnns_groups_2_tags: string[];
  nutriments: Nutriments;
  link: string;
  last_image_t: number;
  labels_hierarchy: string[];
  last_modified_t: number;
  nutrition_data_prepared_per: string;
  image_nutrition_small_url: string;
  _id: string;
  labels_tags: string[];
  nutrition_grades: string;
  purchase_places_tags: string[];
  categories_tags: string[];
  data_sources: string;
  packaging_tags: string[];
  traces_from_ingredients: string;
  ingredients_debug: string[];
  additives_old_tags: unknown[];
  unknown_nutrients_tags: unknown[];
  last_modified_by: string;
  completed_t: number;
  other_nutritional_substances_tags: unknown[];
  ingredients_analysis_tags: string[];
  serving_size: string;
  image_thumb_url: string;
  creator: string;
  nutrition_data_per: string;
  manufacturing_places: string;
  allergens_from_user: string;
  unknown_ingredients_n: string;
  max_imgid: string;
  product_quantity: string;
  data_sources_tags: string[];
  generic_name_pl: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  completeness: number;
  scans_n: number;
  additives_n: number;
  categories_lc: string;
  states: string;
  nova_group_debug: string;
  ingredients_from_palm_oil_n: number;
  ingredients_text_en: string;
  categories_hierarchy: string[];
  generic_name_en: string;
  ingredients: Ingredient[];
  cities_tags: unknown[];
  entry_dates_tags: string[];
  lc: string;
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  emb_codes_20141016: string;
  last_edit_dates_tags: string[];
  data_quality_tags: string[];
  nutriscore_grade: string;
  stores: string;
  countries_lc: string;
  generic_name: string;
  data_quality_errors_tags: unknown[];
  debug_param_sorted_langs: string[];
  countries_hierarchy: string[];
  vitamins_tags: unknown[];
  allergens: string;
  languages: Languages;
  nutriscore_data: NutriscoreData;
  traces_tags: unknown[];
  ingredients_text_debug: string;
  selected_images: SelectedImages;
  rev: number;
  traces_lc: string;
  photographers_tags: string[];
  image_nutrition_url: string;
  image_front_thumb_url: string;
  image_ingredients_thumb_url: string;
  nutriscore_score: number;
  labels_lc: string;
  nucleotides_prev_tags: unknown[];
  allergens_from_ingredients: string;
  nutrient_levels: NutrientLevels;
  additives_prev_original_tags: unknown[];
  expiration_date: string;
  pnns_groups_2: string;
  nutrition_data: string;
  image_front_url: string;
  ingredients_original_tags: string[];
  labels: string;
  origins_tags: string[];
  popularity_tags: string[];
  emb_codes: string;
  countries_tags: string[];
  allergens_tags: string[];
  ingredients_text_with_allergens: string;
  image_front_small_url: string;
  additives_tags: unknown[];
  allergens_lc: string;
  pnns_groups_1_tags: string[];
  correctors_tags: string[];
  last_image_dates_tags: string[];
  languages_tags: string[];
  nutrient_levels_tags: string[];
  traces_from_user: string;
  misc_tags: string[];
  product_name_pl: string;
  ingredients_text: string;
  vitamins_prev_tags: unknown[];
  additives_debug_tags: unknown[];
  manufacturing_places_tags: string[];
  nutrition_score_warning_no_fiber: number;
  purchase_places: string;
  interface_version_created: string;
  languages_codes: LanguagesCodes;
  stores_tags: unknown[];
  code: string;
  categories: string;
  ingredients_n_tags: string[];
  serving_quantity: string;
  image_small_url: string;
  _keywords: string[];
  quantity: string;
  minerals_prev_tags: unknown[];
  informers_tags: string[];
  traces: string;
  traces_hierarchy: unknown[];
  sortkey: number;
  states_hierarchy: string[];
  nutrition_grade_fr: string;
  origins: string;
  product_name: string;
  unique_scans_n: number;
  ingredients_hierarchy: string[];
  ingredients_ids_debug: string[];
  data_quality_info_tags: string[];
  codes_tags: string[];
  interface_version_modified: string;
  ingredients_tags: string[];
  ingredients_text_with_allergens_pl: string;
  lang: string;
  brands: string;
  emb_codes_tags: string[];
  nutrition_grades_tags: string[];
  packaging: string;
  countries: string;
  languages_hierarchy: string[];
  additives_original_tags: unknown[];
  images: Images;
  checkers_tags: unknown[];
  nucleotides_tags: unknown[];
  nutrition_score_beverage: number;
  image_ingredients_small_url: string;
  allergens_hierarchy: string[];
  update_key: string;
  image_ingredients_url: string;
  ingredients_from_palm_oil_tags: unknown[];
  data_quality_bugs_tags: unknown[];
  data_quality_warnings_tags: string[];
  minerals_tags: unknown[];
  no_nutrition_data: string;
  product_name_en: string;
  nova_group_tags: string[];
  amino_acids_prev_tags: unknown[];
  compared_to_category: string;
  id: string;
  last_editor: string;
  pnns_groups_1: string;
  complete: number;
  states_tags: string[];
  nutrition_data_prepared: string;
  image_url: string;
  amino_acids_tags: unknown[];
  additives_old_n: number;
  ingredients_that_may_be_from_palm_oil_tags: unknown[];
  emb_codes_orig: string;
  ingredients_n: string;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  created_t: number;
  ingredients_text_with_allergens_en: string;
  brands_tags: string[];
  editors_tags: string[];
}

export interface Nutriments {
  "nutrition-score-fr": number;
  sodium_unit: string;
  fat_unit: string;
  sodium: number;
  energy_serving: number;
  proteins_unit: string;
  sugars_100g: number;
  sugars_unit: string;
  "energy-kcal_value": number;
  energy_value: number;
  salt_serving: number;
  "energy-kcal": number;
  proteins_100g: number;
  "saturated-fat_value": number;
  salt_value: number;
  "saturated-fat_100g": number;
  sugars: number;
  energy_unit: string;
  "energy-kcal_unit": string;
  "saturated-fat_serving": number;
  sodium_value: number;
  sodium_100g: number;
  carbohydrates: number;
  "saturated-fat": number;
  carbohydrates_100g: number;
  fat: number;
  energy: number;
  sugars_value: number;
  sodium_serving: number;
  proteins: number;
  "nutrition-score-fr_100g": number;
  salt_unit: string;
  "energy-kcal_serving": number;
  "saturated-fat_unit": string;
  fat_value: number;
  fat_100g: number;
  sugars_serving: number;
  salt: number;
  fat_serving: number;
  "energy-kcal_100g": number;
  proteins_value: number;
  carbohydrates_serving: number;
  salt_100g: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  energy_100g: number;
  "fruits-vegetables-nuts-estimate-from-ingredients_100g": number;
  proteins_serving: number;
}

export interface Ingredient {
  percent_min: number;
  percent_max: number;
  rank: number;
  id: string;
  text: string;
}

export interface Languages {
  "en:english": number;
  "en:polish": number;
}

export interface NutriscoreData {
  fiber_points: number;
  saturated_fat_points: number;
  is_cheese: number;
  fiber: number;
  proteins_points: number;
  energy: number;
  sugars_value: number;
  proteins: number;
  saturated_fat_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  negative_points: number;
  energy_points: number;
  is_beverage: number;
  score: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  is_water: number;
  saturated_fat_ratio_value: number;
  proteins_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  positive_points: number;
  saturated_fat_ratio_points: number;
  sodium: number;
  saturated_fat: number;
  fiber_value: number;
  is_fat: number;
  sodium_value: number;
  sodium_points: number;
  saturated_fat_ratio: number;
  grade: string;
  sugars: number;
  energy_value: number;
  sugars_points: number;
}

export interface SelectedImages {
  nutrition: Nutrition;
  ingredients: Ingredients;
  front: Front;
}

export interface Nutrition {
  display: Display;
  thumb: Thumb;
  small: Small;
}

export interface Display {
  pl: string;
}

export interface Thumb {
  pl: string;
}

export interface Small {
  pl: string;
}

export interface Ingredients {
  display: Display2;
  thumb: Thumb2;
  small: Small2;
}

export interface Display2 {
  pl: string;
}

export interface Thumb2 {
  pl: string;
}

export interface Small2 {
  pl: string;
}

export interface Front {
  small: Small3;
  thumb: Thumb3;
  display: Display3;
}

export interface Small3 {
  pl: string;
  en: string;
}

export interface Thumb3 {
  pl: string;
  en: string;
}

export interface Display3 {
  pl: string;
  en: string;
}

export interface NutrientLevels {
  "saturated-fat": string;
  sugars: string;
  salt: string;
  fat: string;
}

export interface LanguagesCodes {
  pl: number;
  en: number;
}

export interface Images {
  "3": N3;
  "4": N4;
  "5": N5;
  ingredients_pl: IngredientsPl;
  front_pl: FrontPl;
  front: Front2;
  "1": N1;
  nutrition_pl: NutritionPl;
  front_en: FrontEn;
  "2": N2;
}

export interface N3 {
  uploaded_t: number;
  uploader: string;
  sizes: Sizes;
}

export interface Sizes {
  "100": N100;
  "400": N400;
  full: Full;
}

export interface N100 {
  w: number;
  h: number;
}

export interface N400 {
  w: number;
  h: number;
}

export interface Full {
  h: number;
  w: number;
}

export interface N4 {
  uploaded_t: number;
  uploader: string;
  sizes: Sizes2;
}

export interface Sizes2 {
  full: Full2;
  "400": N4002;
  "100": N1002;
}

export interface Full2 {
  w: number;
  h: number;
}

export interface N4002 {
  w: number;
  h: number;
}

export interface N1002 {
  h: number;
  w: number;
}

export interface N5 {
  uploaded_t: number;
  uploader: string;
  sizes: Sizes3;
}

export interface Sizes3 {
  full: Full3;
  "400": N4003;
  "100": N1003;
}

export interface Full3 {
  w: number;
  h: number;
}

export interface N4003 {
  w: number;
  h: number;
}

export interface N1003 {
  w: number;
  h: number;
}

export interface IngredientsPl {
  normalize: string;
  y1: string;
  geometry: string;
  imgid: string;
  ocr: number;
  x2: string;
  x1: string;
  angle: string;
  y2: string;
  sizes: Sizes4;
  rev: string;
  white_magic: string;
  orientation: string;
}

export interface Sizes4 {
  "200": N200;
  "100": N1004;
  full: Full4;
  "400": N4004;
}

export interface N200 {
  w: number;
  h: number;
}

export interface N1004 {
  w: number;
  h: number;
}

export interface Full4 {
  w: number;
  h: number;
}

export interface N4004 {
  h: number;
  w: number;
}

export interface FrontPl {
  y1: unknown;
  normalize: unknown;
  geometry: string;
  imgid: string;
  sizes: Sizes5;
  y2: unknown;
  angle: unknown;
  x1: unknown;
  x2: unknown;
  white_magic: unknown;
  rev: string;
}

export interface Sizes5 {
  "100": N1005;
  "200": N2002;
  full: Full5;
  "400": N4005;
}

export interface N1005 {
  h: number;
  w: number;
}

export interface N2002 {
  h: number;
  w: number;
}

export interface Full5 {
  w: number;
  h: number;
}

export interface N4005 {
  w: number;
  h: number;
}

export interface Front2 {
  normalize: unknown;
  sizes: Sizes6;
  geometry: string;
  imgid: string;
  rev: string;
  white_magic: unknown;
}

export interface Sizes6 {
  full: Full6;
  "400": N4006;
  "100": N1006;
  "200": N2003;
}

export interface Full6 {
  w: number;
  h: number;
}

export interface N4006 {
  w: number;
  h: number;
}

export interface N1006 {
  h: number;
  w: number;
}

export interface N2003 {
  h: number;
  w: number;
}

export interface N1 {
  uploaded_t: string;
  sizes: Sizes7;
  uploader: string;
}

export interface Sizes7 {
  "100": N1007;
  "400": N4007;
  full: Full7;
}

export interface N1007 {
  h: number;
  w: number;
}

export interface N4007 {
  h: number;
  w: number;
}

export interface Full7 {
  h: number;
  w: number;
}

export interface NutritionPl {
  imgid: string;
  geometry: string;
  y1: unknown;
  normalize: unknown;
  white_magic: unknown;
  rev: string;
  y2: unknown;
  sizes: Sizes8;
  angle: unknown;
  x2: unknown;
  x1: unknown;
}

export interface Sizes8 {
  "200": N2004;
  "100": N1008;
  full: Full8;
  "400": N4008;
}

export interface N2004 {
  h: number;
  w: number;
}

export interface N1008 {
  h: number;
  w: number;
}

export interface Full8 {
  h: number;
  w: number;
}

export interface N4008 {
  h: number;
  w: number;
}

export interface FrontEn {
  normalize: unknown;
  sizes: Sizes9;
  geometry: string;
  imgid: string;
  rev: string;
  white_magic: unknown;
}

export interface Sizes9 {
  full: Full9;
  "400": N4009;
  "100": N1009;
  "200": N2005;
}

export interface Full9 {
  w: number;
  h: number;
}

export interface N4009 {
  w: number;
  h: number;
}

export interface N1009 {
  h: number;
  w: number;
}

export interface N2005 {
  h: number;
  w: number;
}

export interface N2 {
  uploader: string;
  sizes: Sizes10;
  uploaded_t: number;
}

export interface Sizes10 {
  "100": N10010;
  "400": N40010;
  full: Full10;
}

export interface N10010 {
  w: number;
  h: number;
}

export interface N40010 {
  h: number;
  w: number;
}

export interface Full10 {
  w: number;
  h: number;
}
