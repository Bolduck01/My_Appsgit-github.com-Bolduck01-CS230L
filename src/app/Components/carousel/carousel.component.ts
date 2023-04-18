import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  @Input() img: string;

  constructor() {
    
    this.img = "No img found";
    
  }

  ngOnInit(): void {
    
  }

}
