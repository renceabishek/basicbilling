import { Injectable } from '@angular/core';
import {product} from './product'
import {PRODUCTS} from './mock-product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():product[]{
    return PRODUCTS;
  }
}
