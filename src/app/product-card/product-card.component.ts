import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() price: number;
@Input() imgDescription: string;
@Input() description: string;
@Input() img: string;

constructor() {

  this.img = "No img found";
  this.imgDescription = "No description found"
  this.description = "No description found"
  this.price = 0;

}

ngOnInit(): void {

}

}