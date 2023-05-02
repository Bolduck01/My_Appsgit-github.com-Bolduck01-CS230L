import { Component, Input } from "@angular/core";

@Component ({
    selector: 'fm-shows-carousel',
    templateUrl: 'shows-carousel.component.html',
    styleUrls: ['shows-carousel.component.css']
})
export class ShowsCarouselComponent {

    @Input() src: string;
    @Input() alt: string;

    constructor() {
        this.src="";
        this.alt="";
    }
}