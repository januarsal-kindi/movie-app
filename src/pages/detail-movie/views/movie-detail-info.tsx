import React, { PropsWithChildren, memo } from 'react'
import {
    MovieDetail,
} from "@store/type/movie-detail-type";
interface MovieDetailProps extends PropsWithChildren<any> {
    movieDetail: MovieDetail,
}

const MovieDetailInfo: React.FunctionComponent<MovieDetailProps> = (props) => {
    return (
        <div className="w-3/4">
            <div>
                <h1 className="text-4xl">{props.movieDetail.Title} ({props.movieDetail.Year})</h1>
                <div className="flex mt-4">
                    <div className="movie-rating">
                        {props.movieDetail.Rated}
                    </div>
                    <p>
                        {props.movieDetail.Genre}

                    </p>
                </div>
                <p className="mt-2">
                    {props.movieDetail.Plot}

                </p>
                <p className="mt-2">
                    <b>Actors : </b> {props.movieDetail.Actors}
            </p>
                <p className="mt-2">
                    <b>Director :  </b>{props.movieDetail.Director}
            </p>
                <p className="mt-2">
                    <b>Production :  </b>{props.movieDetail.Production}
            </p>
            </div>
            <div className="flex mt-6">
                {props.movieDetail.Ratings?.map((rating) => (
                    <div className="rate-movie flex justify-center items-center flex-col w-1/3 mx-1">
                        <p>{rating.Source}</p>
                        <p className="my-4  "> {rating.Value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default memo(MovieDetailInfo)
