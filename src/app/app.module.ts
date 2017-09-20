import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CityComponent } from './search/city.component';
import { CollectionItemComponent } from './collection/collection_item.component';
import { CollectionComponent } from './collection/collection.component';
import { RestaurantComponent } from './restaurent-collection/restaurant.component';
import { RestaurantItemComponent } from './restaurent-collection/restaurant-item.component';
import { CuisineItemComponent } from './cuisines/cuisine_item.component';
import { CuisineComponent } from './cuisines/cuisine.component';
import { DetailComponent } from './detail-collection/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CityComponent,
    CollectionComponent,
    CollectionItemComponent,
    RestaurantComponent,
    RestaurantItemComponent,
    CuisineItemComponent,
    CuisineComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'home',
        component: SearchComponent
      },
      {
        path: 'collection/:id',
        component: CollectionComponent
      },
      {
        path: 'cuisine/:id',
        component: CuisineComponent
      },
      {
        path: 'restaurant/:collectionId',
        component: RestaurantComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
