import { Component, OnInit } from '@angular/core';
import { CarouselModel } from './Components/carousel/carousel.model';
import { mock_list } from './Components/carousel/mock_list';
import { CarouselService } from './Components/carousel/carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My-Website';
  products: CarouselModel [] = [];

  constructor(private carouselservice: CarouselService){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }

  ngOnInit(): void{
    this.carouselservice.getCarousel().subscribe((data: CarouselModel[])=> {
      for (var x of data){
        console.log(x)
        this.products.push(x)
      }
    })
  }

}
