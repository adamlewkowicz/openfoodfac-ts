import { BaseResponse } from './base';
import { Product } from '.';

export interface ResponseEan extends BaseResponse {
  product?: Product
}