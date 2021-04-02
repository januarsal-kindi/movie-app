import { Dispatch } from "redux";
import {
	MOVIE_LIST_LOADING,
	MOVIE_LIST_FAIL,
	MOVIE_LIST_SUCCESS,
  MOVIE_LIST_LOADING_SEARCH,
  MOVIE_LIST_SUCCESS_SEARCH,
	MovieListDispatchType,
} from "@store/type/movie-list-type";
import axios from "axios";

export const getMovieList = (page: number,keyword : string) => async (
	dispatch: Dispatch<MovieListDispatchType>,
) => {
	try {
		dispatch({
			type: MOVIE_LIST_LOADING,
		});

		const res = await axios.get(
			`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyword}&page=${page}`,
		);
		if (res.data) {
			if (res.data.Response === "True") {
        const {Search} = res.data
				dispatch({
					type: MOVIE_LIST_SUCCESS,
					payload: {
            list : Search,
            page :page,
            keyword : keyword
          },
				});
			}
		}else {
      dispatch({
        type: MOVIE_LIST_FAIL,
      });
    }
	} catch (e) {
		dispatch({
			type: MOVIE_LIST_FAIL,
		});
	}
};


export const getMovieListSearch = (keyword : string) => async (
	dispatch: Dispatch<MovieListDispatchType>,
) => {
	try {
		dispatch({
			type: MOVIE_LIST_LOADING_SEARCH,
		});

		const res = await axios.get(
			`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyword}&page=1`,
		);
		if (res.data) {
			if (res.data.Response === "True") {
        const {Search} = res.data
				dispatch({
					type: MOVIE_LIST_SUCCESS_SEARCH,
					payload: {
            list : Search,
            page :1,
            keyword : keyword
          },
				});
			}
		}else {
      dispatch({
        type: MOVIE_LIST_FAIL,
      });
    }
	} catch (e) {
		dispatch({
			type: MOVIE_LIST_FAIL,
		});
	}
};
