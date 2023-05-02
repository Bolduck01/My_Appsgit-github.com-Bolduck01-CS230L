import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from '../carousel/carousel.model';
import { CarouselService } from '../carousel/carousel.service';
import { ShowsCarouselComponent } from '../shows-carousel/shows-carousel.component';


@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: CarouselService) {}

  ngOnInit(): void {

  }
  addProduct(product: CarouselInfo) {
    console.log("You clicked add product");
    console.log(product);
    this.ps.addCarousel(product);
  }

}
