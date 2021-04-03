export const MOVIE_DETAIL_LOADING = "MOVIE_DETAIL_LOADING";
export const MOVIE_DETAIL_FAIL = "MOVIE_DETAIL_FAIL";
export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";

export type MovieDetail = {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Production: string;
	keyword: string;
	Ratings: Ratings[];
};

export type Ratings = {
	Source: string;
	Value: string;
};

export interface MovieDetailLoading {
	type: typeof MOVIE_DETAIL_LOADING;
}

export interface MovieDetailFail {
	type: typeof MOVIE_DETAIL_FAIL;
}

export interface MovieDetailSuccess {
	type: typeof MOVIE_DETAIL_SUCCESS;
	payload: MovieDetail;
}

export type MovieDetailDispatchType =
	| MovieDetailSuccess
	| MovieDetailFail
	| MovieDetailLoading;
