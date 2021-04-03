import {
	MOVIE_DETAIL_LOADING,
	MOVIE_DETAIL_FAIL,
	MOVIE_DETAIL_SUCCESS,
	MovieDetailDispatchType,
	MovieDetail,
} from "@store/type/movie-detail-type";

interface DefaultStateI {
	loading: boolean;
	detail: MovieDetail;
}

const defaultState: DefaultStateI = {
	loading: false,
	detail: {
		Title: "",
		Year: "",
		Rated: "",
		Released: "",
		Runtime: "",
		Genre: "",
		Director: "",
		Actors: "",
		Plot: "",
		Language: "",
		Country: "",
		Awards: "",
		Poster: "",
		Production: "",
		keyword: "",
		Ratings: [],
	},
};

const movieDetailReducer = (
	state: DefaultStateI = defaultState,
	action: MovieDetailDispatchType,
): DefaultStateI => {
	switch (action.type) {
		case MOVIE_DETAIL_FAIL:
			return {
				...state,
				loading: false,
			};
		case MOVIE_DETAIL_LOADING:
			return {
				...state,
				loading: true,
			};
		case MOVIE_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				detail: { ...action.payload },
			};
		default:
			return state;
	}
};

export default movieDetailReducer;
