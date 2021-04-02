import {Dispatch} from "redux";
import {MOVIE_LIST_LOADING, MOVIE_LIST_FAIL, MOVIE_LIST_SUCCESS, MovieListDispatchType} from "@store/type/movie-list-type";
import axios from "axios";

export const getMovieList = (pokemon: string) => async (dispatch: Dispatch<MovieListDispatchType>) => {
  try {
    dispatch({
      type: MOVIE_LIST_LOADING
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(res.data){
        if(res.data.Response === "True"){
            dispatch({
                type: MOVIE_LIST_SUCCESS,
                payload: res.data
            })          
        }
    }
    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: MOVIE_LIST_FAIL
    })
  }
};