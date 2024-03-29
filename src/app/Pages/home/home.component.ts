import { Component, OnInit } from '@angular/core';
import { mock_list } from 'src/app/Components/carousel/mock_list';
import { CarouselInfo } from 'src/app/Components/carousel/carousel.model';
import { CarouselService } from 'src/app/Components/carousel/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: CarouselInfo [] = [];

  constructor (private carouselService: CarouselService) {
  }

  ngOnInit(): void {
    this.carouselService.getCarousels().subscribe((data: CarouselInfo []) => {
       console.log("Fetching products");
       for(var item of data){
       this.info.push(item);
       }
    });
  }

}
