import { Component, OnInit } from '@angular/core';
import { CityComponent } from './city.component';
import { NgForm, FormControl } from '@angular/forms';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs/Observable';
import { LocationResponse } from '../model_classes/location_response';
import { Location } from '../model_classes/location';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    CityService
  ]
})
export class SearchComponent implements OnInit {
  private searchBox: FormControl;
  private terms$ = new Subject<string>();
  loc;
  form = {
    keyword : ''
  };

  locations: Location[];

  constructor(private cityService: CityService) { }

  searchCity(keyword: string) {
    this.cityService.getLocations(keyword).subscribe(
      (response: LocationResponse) => {
        console.log(response);
        this.locations = response.location_suggestions;
      }
    );
  }

  ngOnInit() {
    this.terms$
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(terms => this.cityService.getLocations(terms))
    .subscribe((response: LocationResponse) => {
      console.log(response);
      this.locations = response.location_suggestions;
    });
  }



  onSearch(f: NgForm) {
    this.searchCity(f.value.keyword);
  }
}
