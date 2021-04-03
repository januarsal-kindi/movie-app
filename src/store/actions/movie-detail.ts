import { Dispatch } from "redux";
import {
	MOVIE_DETAIL_LOADING,
	MOVIE_DETAIL_SUCCESS,
	MOVIE_DETAIL_FAIL,
	MovieDetailDispatchType,
} from "@store/type/movie-detail-type";
import axios from "axios";

export const getMovieById = (idMovie: string) => async (
	dispatch: Dispatch<MovieDetailDispatchType>,
) => {
	try {
		dispatch({
			type: MOVIE_DETAIL_LOADING,
		});

		const res = await axios.get(
			`http://www.omdbapi.com?apikey=faf7e5bb&i=${idMovie}`,
		);
		if (res.data) {
			if (res.data.Response === "True") {
				dispatch({
					type: MOVIE_DETAIL_SUCCESS,
					payload: {
            ...res.data
					},
				});
			}
		} else {
			dispatch({
				type: MOVIE_DETAIL_FAIL,
			});
		}
	} catch (e) {
		dispatch({
			type: MOVIE_DETAIL_FAIL,
		});
	}
};
