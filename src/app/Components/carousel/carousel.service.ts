import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarouselInfo } from "./carousel.model";



@Injectable(
    {providedIn: 'root'}
)
export class CarouselService {

    private baseUrl: string = "https://hbo-app-86135-default-rtdb.firebaseio.com/";
    private carouselEndPoint = "Carousel.json";

    constructor(private http:HttpClient){

    }
    getCarousels(){
        return this.http.get<CarouselInfo []>(this.baseUrl + this.carouselEndPoint);
    }

    getCarousel(index: number){
        return this.http.get<CarouselInfo>(this.baseUrl + 'Carousel' + '/' + index + 'json' );
    }

    addCarousel(product: CarouselInfo){
        this.http.get<CarouselInfo>("product");
      }
}   
