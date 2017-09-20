import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CityService } from '../services/city.service';
import { CuisineSingle } from '../model_classes/cuisine_single';
import { CuisineResponse } from '../model_classes/cuisine_response';
import { CuisineItemComponent } from './cuisine_item.component';

@Component({
  selector: 'app-cuisinecollection',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css'],
  providers: [
    CityService
  ]
})
export class CuisineComponent implements OnInit {

  cuisinecollections: CuisineSingle[];
  constructor(
    private cityService: CityService,
    private routee: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routee.params
            .switchMap((paramss: Params) => this.cityService.getCuisines(paramss.id))
            .subscribe((dataa: CuisineResponse) => {
              this.cuisinecollections = dataa.cuisines;
              console.log(this.cuisinecollections);
            });
  }
}
