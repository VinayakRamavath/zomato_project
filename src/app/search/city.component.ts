import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../services/city.service';
import { Location } from '../model_classes/location';
import { RouterLink } from '@angular/router';

@Component({
    selector : 'app-city',
    templateUrl : './city.component.html',
    providers: [
        CityService
    ]
})
export class CityComponent implements OnInit {
    @Input() city: Location;

    constructor() {}

    ngOnInit() {

    }

    onClickDetail(data: Location) {

    }

}
