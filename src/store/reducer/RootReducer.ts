import {combineReducers} from "redux";
import movieListReducer from "./movie-list-reducer";
import movieDetailReducer from "./movie-detail-reducer";

const RootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetail : movieDetailReducer
});

export default RootReducer