import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import CartReducer from "./cartReducer";
import UserReducer from './userReducer'
import AuthReducer from './authReducer'
import AlertReducer from './alert.Reducer'
import Types_prodReducer from './types_prodReducer'
import Genres_prodReducer from './genres_prodReducer'
import Sleeve_condition_prodReducer from "./sleeve_condition_prodReducer"
import ArtisteReducer from "./artiste.Reducer";
import ArticleReducer from "./article.Reducer";
const allReducers = combineReducers({
  types:Types_prodReducer,
  authentication : AuthReducer,
  products: ProductReducer,
  cart: CartReducer,
  users:UserReducer,
  alert:AlertReducer,
  genres:Genres_prodReducer,
  sleeve_conditions:Sleeve_condition_prodReducer,
  artistes:ArtisteReducer,
  articles:ArticleReducer

});

export default allReducers;
