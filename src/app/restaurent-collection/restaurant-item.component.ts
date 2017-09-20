import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model_classes/restaurant';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurant-item',
    templateUrl: './restaurant-item.component.html'
})
export class RestaurantItemComponent implements OnInit {
    @Input() restaurant: Restaurant;

    ngOnInit() {
    }
}
