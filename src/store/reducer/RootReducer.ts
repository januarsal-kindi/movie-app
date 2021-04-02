import {combineReducers} from "redux";
import movieListReducer from "./movie-list-reducer";

const RootReducer = combineReducers({
  movieList: movieListReducer
});

export default RootReducer