import {
	MOVIE_LIST_LOADING,
	MOVIE_LIST_FAIL,
	MOVIE_LIST_SUCCESS,
	MOVIE_LIST_LOADING_SEARCH,
	MOVIE_LIST_SUCCESS_SEARCH,
	MovieListDispatchType,
	itemMovie,
} from "@store/type/movie-list-type";

interface DefaultStateI {
	loading: boolean;
	movieList: itemMovie[];
	page: number;
	keyword: string;
}

const defaultState: DefaultStateI = {
	loading: false,
	movieList: [],
	page: 0,
	keyword: "batman",
};

const fetchMovieListSuccess = (
	state: DefaultStateI = defaultState,
	action: MovieListDispatchType,
) => {
	if (action.type === MOVIE_LIST_SUCCESS) {
		const prevState = state;

		if (prevState.keyword !== action.payload.keyword) {
			return {
				...prevState,
				loading: false,
				movieList: action.payload.list,
				page: action.payload.page,
				keyword: action.payload.keyword,
			};
		}
		return {
			...prevState,
			loading: false,
			movieList: [...state.movieList, ...action.payload.list],
			page: action.payload.page,
			keyword: action.payload.keyword,
		};
	}
	return state;
};
const movieListReducer = (
	state: DefaultStateI = defaultState,
	action: MovieListDispatchType,
): DefaultStateI => {
	switch (action.type) {
		case MOVIE_LIST_FAIL:
			return {
				...state,
				loading: false,
			};
		case MOVIE_LIST_LOADING:
			return {
				...state,
				loading: true,
			};
		case MOVIE_LIST_LOADING_SEARCH:
			return {
				...state,
				loading: true,
				movieList: [],
			};
		case MOVIE_LIST_SUCCESS_SEARCH:
			return {
				...state,
				loading: false,
				movieList: action.payload.list,
        page: action.payload.page,
        keyword: action.payload.keyword,
			};
		case MOVIE_LIST_SUCCESS:
			return fetchMovieListSuccess(state, action);
		default:
			return state;
	}
};

export default movieListReducer;
