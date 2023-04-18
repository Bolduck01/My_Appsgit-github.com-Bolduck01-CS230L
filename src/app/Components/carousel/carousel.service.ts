import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarouselModel } from "./carousel.model";

@Injectable(
    {providedIn: 'root'}
)
export class CarouselService {

    private baseUrl: string = "https://hbo-app-86135-default-rtdb.firebaseio.com/";
    private carouselEndPoint = "Carousel.json";

    constructor(private http:HttpClient){

    }
    getCarousels(){
        return this.http.get<CarouselModel []>(this.baseUrl + this.carouselEndPoint);
    }

    getCarousel(index: number){
        return this.http.get<CarouselModel>(this.baseUrl + 'Carousel' + '/' + index + 'json' );
    }
}   
