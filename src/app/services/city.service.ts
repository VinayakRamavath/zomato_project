import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { LocationResponse } from '.././model_classes/location_response';
import { CollectionsResponse } from '.././model_classes/collection_response';
import { CuisineResponse } from '.././model_classes/cuisine_response';
import { CuisineSingle } from '.././model_classes/cuisine_single';
@Injectable()
export class CityService {
  constructor(private http: Http) {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const requestOpt = new RequestOptions({ headers: headers });
    http.get('https://developers.zomato.com/api/v2.1/collections?city_id=6', requestOpt)
    .subscribe((response: Response) => console.log(response.json())
  );
  http.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=6', requestOpt)
  .subscribe((response: Response) => console.log(response.json())
);

}

  getLocations(keyword: string): Observable<LocationResponse> {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const requestOpt = new RequestOptions({ headers: headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/cities?q=' + keyword, requestOpt)
            .map((response: Response) => response.json());
  }


  getCollections(city_id: number): Observable<CollectionsResponse> {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const requestOpt = new RequestOptions({ headers : headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/collections?city_id=' + city_id, requestOpt)
            .map((response: Response) => response.json()
          );
  }

  getCuisines(city_id: number): Observable<CuisineResponse> {
    const headers = new Headers({ 'user-key' : 'fe78d4e792f8dbf9ededaf11e41f9d3c' });
    const requestOpt = new RequestOptions({ headers : headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=' + city_id, requestOpt)
            .map((response: Response) => response.json()
          );
  }


}
