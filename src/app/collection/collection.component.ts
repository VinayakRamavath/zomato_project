import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CityService } from '../services/city.service';
import { CollectionsResponse } from '../model_classes/collection_response';
import { CollectionSingle } from '../model_classes/collection_single';
import { CollectionItemComponent } from './collection_item.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [
    CityService
  ]
})
export class CollectionComponent implements OnInit {
  collections: CollectionSingle[];
  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
            .switchMap((params: Params) => this.cityService.getCollections(params.id))
            .subscribe((data: CollectionsResponse) => {
              this.collections = data.collections;
              console.log(this.collections);
            });
  }
}
