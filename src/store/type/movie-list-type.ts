export const MOVIE_LIST_LOADING = "MOVIE_LIST_LOADING";
export const MOVIE_LIST_FAIL = "MOVIE_LIST_FAIL";
export const MOVIE_LIST_SUCCESS = "MOVIE_LIST_SUCCESS";
export const MOVIE_LIST_LOADING_SEARCH = "MOVIE_LIST_LOADING_SEARCH"
export const MOVIE_LIST_SUCCESS_SEARCH = "MOVIE_LIST_SUCCESS_SEARCH"

export type MovieList = {
  list : itemMovie[],
  page : number,
  keyword : string
  // sprites: PokemonSprites,
  // stats: PokemonStat[]
}

export type itemMovie = {
  Title: string,
  Year: string,
  imdbID: string,
  Poster : string,
  Type : string,
}


export interface  MovieListLoading {
  type: typeof MOVIE_LIST_LOADING | typeof MOVIE_LIST_LOADING_SEARCH
}

export interface MovieListFail {
  type: typeof MOVIE_LIST_FAIL
}

export interface MovieListSuccess {
  type: typeof MOVIE_LIST_SUCCESS | typeof MOVIE_LIST_SUCCESS_SEARCH,
  payload: MovieList
}

export type MovieListDispatchType  = MovieListLoading | MovieListFail | MovieListSuccess