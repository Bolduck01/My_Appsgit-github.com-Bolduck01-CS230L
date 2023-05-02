import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from './Components/carousel/carousel.model';
import { mock_list } from './Components/carousel/mock_list';
import { CarouselService } from './Components/carousel/carousel.service';
import { ShowsCarouselModel } from './Components/shows-carousel/shows-carousel.model';
import { shows_list } from './Components/shows-carousel/shows_list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'My-Website';
  products: CarouselInfo [] = [];
  newslide: ShowsCarouselModel [] = [];

  /** 
  constructor() {
    for (var product of shows_list) {
      console.log(product);
      this.newslide.push(product);
    }
  }
  */
  
  constructor(private carouselservice: CarouselService){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
  

  ngOnInit(): void{
    this.carouselservice.getCarousels().subscribe((data: CarouselInfo[])=> {
      for (var x of data){
        console.log(x)
        this.products.push(x)
      }
    })
  }
  

}
