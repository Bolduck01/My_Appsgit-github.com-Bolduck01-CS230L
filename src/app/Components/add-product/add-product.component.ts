import { Component, OnInit } from '@angular/core';
import { CarouselModel } from '../carousel/carousel.model';
import { CarouselService } from '../carousel/carousel.service';
@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: CarouselService) {}

  ngOnInit(): void {

  }
  addProduct(product: CarouselModel) {
    console.log("You clicked add product");
    console.log(product);
    this.ps.addCarousel(product);
  }

}
