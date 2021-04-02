export const MOVIE_LIST_LOADING = "MOVIE_LIST_LOADING";
export const MOVIE_LIST_FAIL = "MOVIE_LIST_FAIL";
export const MOVIE_LIST_SUCCESS = "MOVIE_LIST_SUCCESS";

export type MovieList = {
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[]
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}


export interface  MovieListLoading {
  type: typeof MOVIE_LIST_LOADING
}

export interface MovieListFail {
  type: typeof MOVIE_LIST_FAIL
}

export interface MovieListSuccess {
  type: typeof MOVIE_LIST_SUCCESS,
  payload: PokemonType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess