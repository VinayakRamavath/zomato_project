import { RestaurantLocation } from './restaurant_location';
import { RestaurantRating } from './restaurant_rating';

export class Restaurant {
    id: string;
    name: string;
    url: string;
    location: RestaurantLocation;
    cuisines: string;
    user_rating: RestaurantRating;
    featured_image: string;
    menu_url: string;
}
