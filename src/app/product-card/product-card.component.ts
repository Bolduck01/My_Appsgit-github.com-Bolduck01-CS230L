import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() price: number;
@Input() price1: number;
@Input() description: string;
@Input() title: string;

constructor() {

  this.title = "No img found";
  this.price1 = 0,
  this.description = "No description found"
  this.price = 0;

}

ngOnInit(): void {

}

}