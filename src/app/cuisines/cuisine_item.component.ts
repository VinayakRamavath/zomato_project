import { Component, OnInit, Input } from '@angular/core';
import { CuisineSingle } from '../model_classes/cuisine_single';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-cuisine-item',
    templateUrl: './cuisine_item.component.html'
})
export class CuisineItemComponent implements OnInit {
    @Input() cuisineSingle: CuisineSingle;

    constructor() {

    }

    ngOnInit() {
    }
}
