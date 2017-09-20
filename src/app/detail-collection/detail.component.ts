import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RestaurantService } from '.././services/restaurant.service';
import { Restaurant } from '../model_classes/restaurant';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [
    RestaurantService
  ]
})
export class DetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((param: Params) => this.restaurantService.getDetailRestaurant(param.id))
              .subscribe((response: Restaurant) => {
                this.restaurant = response;
              });
  }

}
