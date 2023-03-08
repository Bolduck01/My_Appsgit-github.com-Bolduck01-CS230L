import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;

  constructor() {
    
    this.img = "No img found";
    this.description = "No description found";
    this.title = "No title found";
  }

  ngOnInit(): void {
    
  }

}
