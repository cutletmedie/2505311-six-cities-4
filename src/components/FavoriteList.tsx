import {FavoriteCityOffers} from '../const';
import FavoriteCard from './FavoriteCard';

export default function FavoriteList({cityFavorites}: {cityFavorites: FavoriteCityOffers}) {
  return (
    <li className="favorites__locations-items">
      <div
        className="favorites__locations locations locations--current"
      >
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityFavorites.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityFavorites.offers.map((offer) => (<FavoriteCard offer={offer} key={offer.id}/>))}
      </div>
    </li>
  );
}
