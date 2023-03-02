import { Component } from '@angular/core';
import { mock_list } from './product-card/mock_lists';
import { productModel } from './product-card/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-sink';
  products: productModel[] = [];

  constructor() {
    for (var product of mock_list) {
      console.log(product);
      this.products.push(product);
    }
  }
}
