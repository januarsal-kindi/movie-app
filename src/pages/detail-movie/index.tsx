import React, { useEffect } from 'react'
import DefaultLayout from '@shared/hoc/defaultLayout'
import ImageHeader from './views/image-header'
import MovieDetailInfo from './views/movie-detail-info'
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@store/index";
import { getMovieById } from "@store/actions/movie-detail";
import { useHistory, useParams } from "react-router-dom";

const DetailMovie: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const movieDetailState = useSelector((state: RootStore) => state.movieDetail);
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        dispatch(getMovieById(id))
    }, [])

    console.log(movieDetailState)
    return (
        <>
            {!movieDetailState.loading && (
                <>
                    <ImageHeader
                        image={movieDetailState?.detail.Poster}
                    />
                    <div className="container lg mx-auto my-12">
                        <div className="flex ">
                            <div className="w-1/4">
                                <img className="rounded-xl img-profile" src={movieDetailState.detail.Poster} />
                            </div>
                            <MovieDetailInfo 
                                movieDetail ={movieDetailState.detail}
                            />
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default DefaultLayout(DetailMovie)
