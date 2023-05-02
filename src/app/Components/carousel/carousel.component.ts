import { Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselInfo } from './carousel.model';


@Injectable()
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  myInfo: CarouselInfo | undefined

  constructor(private http: HttpClient) {
  }
    ngOnInit(): void{
      console.log('initializing component');
      this.getCarouselInfo();
      console.log('Registering showUserInfo as a subscriber');
      this.showCarouselInfo();
  }

  getCarouselInfo() {
      return this.http.get<CarouselInfo>('https://hbo-app-86135-default-rtdb.firebaseio.com/Carousel.json');
  }
  showCarouselInfo() {
      this.getCarouselInfo().subscribe( (data: CarouselInfo) => {
          console.log(data);
          this.myInfo = data;
         
      })

  }
}
