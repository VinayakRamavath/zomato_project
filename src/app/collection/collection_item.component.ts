import { Component, OnInit, Input } from '@angular/core';
import { CollectionSingle } from '../model_classes/collection_single';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-collection-item',
    templateUrl: './collection_item.component.html'
})
export class CollectionItemComponent implements OnInit {
    @Input() collectionSingle: CollectionSingle;

    constructor() {
    }

    ngOnInit() {
    }
}
