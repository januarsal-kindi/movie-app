import React, { useState, useEffect ,useRef } from 'react'
import { useHistory } from "react-router-dom";
import DefaultLayout from '@shared/hoc/defaultLayout'
import CardMovie from './views/card-movie'
import CardMovieLoadiing from './views/card-movie-loading'
import ModalImage from './views/modal-image';
import FormSearch from './views/form-search';

import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@store/index";
import { getMovieList,getMovieListSearch } from "@store/actions/movie-list";

const Home: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const loader = useRef<HTMLDivElement>(null);
    const movieListState = useSelector((state: RootStore) => state.movieList);
    const [imagePopUp, setImagePopup] = useState<string | null | undefined>(null)
    const [showModalImage, setShowModalImage] = useState<boolean>(false)
    const [pagination, setPagination ] = useState<number>(0)

    const clickImageCardHandler = (imageUrl: string | undefined) => {
        setImagePopup(imageUrl)
        setShowModalImage(true)
    }

    const clickCardHandler = () => {
        history.push('/detail')
    }
    const submitSearchHandler = (value :string) => {
        dispatch(getMovieListSearch(value ))
    }

    const handleObserver = (entities : any) => {
        const target = entities[0];
        if (target.isIntersecting){   
            if (target.isIntersecting) {   
                setPagination((page) => page + 1)
            }
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "2px",
            threshold: 1.0
         });
         if (loader.current) {
            observer.observe(loader.current)
         }
         dispatch(getMovieList(1, movieListState.keyword ))

    }, [])
    useEffect(() => {
        if(pagination !== movieListState.page) {
            if(movieListState.movieList.length != 0 ){
                dispatch(getMovieList(movieListState.page+1 , movieListState.keyword ))
            }
        }
    }, [pagination])
   

    return (
        <>
            <div className="container mx-auto my-10">
                <FormSearch
                    onClickSubmit={submitSearchHandler}
                    valueKeyword={movieListState.keyword}
                />
                <div  className="grid grid-cols-5 auto-cols-max gap-4">
                    {movieListState.movieList.map((movie,index) => (
                        <CardMovie
                            onClickImage={clickImageCardHandler}
                            onClickCard={clickCardHandler}
                            years={movie.Year}
                            title={movie.Title}
                            image={movie.Poster}
                            type={movie.Type}
                            key={index}
                        ></CardMovie>
                    ))}
                </div>
                <div id="bootom-scrol" ref={loader} className="bottom-scrol" ></div>
                {movieListState.loading && (
                     <CardMovieLoadiing/>
                     )
                }

            </div>
            <ModalImage
                showModalImages={showModalImage}
                onCloseModalImage={() => { setShowModalImage(false) }}
                urlImage={imagePopUp}
            />

        </>
    )
}

export default DefaultLayout(Home)
