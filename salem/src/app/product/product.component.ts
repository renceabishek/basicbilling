import { Component, OnInit } from '@angular/core';
import {product} from '../product';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productlist: product[];
  selectProduct:product;
  
  constructor(private helloproduct: ProductService) { }

  ngOnInit() {
    this.getProductsfromProComponent();
  }

  getProductsfromProComponent(): void{
    this.productlist=this.helloproduct.getProducts();
  }
  onSelect(prod:product): void{
    this.selectProduct=prod;
  }

}
