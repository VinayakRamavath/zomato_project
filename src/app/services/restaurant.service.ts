import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { RestaurantResponse } from '.././model_classes/restaurant_response';
import { Restaurant } from '.././model_classes/restaurant';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  getRestaurant(collectionId: string): Observable<RestaurantResponse> {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const options = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/search?collection_id=' + collectionId, options)
                .map((response: Response) => response.json());
  }

  getDetailRestaurant(resId: string): Observable<Restaurant> {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const options = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + resId, options)
                .map((response: Response) => response.json());
  }

}
