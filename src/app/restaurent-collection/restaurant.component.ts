import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

import { RestaurantResponse } from '../model_classes/restaurant_response';
import { RestaurantSingle } from '../model_classes/restaurant_single';

import { RestaurantItemComponent } from './restaurant-item.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [
    RestaurantService
  ]
})
export class RestaurantComponent implements OnInit {

  restaurants: RestaurantSingle[];

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
            .switchMap((param: Params) => this.restaurantService.getRestaurant(param.collectionId))
            .subscribe((response: RestaurantResponse) => {
              this.restaurants = response.restaurants;
            });
  }

}
