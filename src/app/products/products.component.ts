import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
   {'title': 'Product1', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
   {'title': 'Product2', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
   {'title': 'Product3', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
  ];

  title = '';
  description = '';

  constructor() {  }

  ngOnInit() {  }

  addProduct(value: any) {
    this.products.push({'title': value.title, 'description': value.description});
    this.title = '';
    this.description = '';
  }

  removeProduct(product) {
    this.products.splice(product, 1);
  }

}
