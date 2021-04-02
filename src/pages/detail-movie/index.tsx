import React from 'react'
import DefaultLayout from '../../shared/hoc/defaultLayout'
import './style.scss'

const detailMovie:React.FC<{}> =() =>{
    return (
        <>
        <div className="container-img-header w-full relative ">
            <img className="img-header  w-full  absolute top-0" src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"/>
        </div>
        <div className="container lg mx-auto my-12">
            <div className="flex ">
                <div className="w-1/3">
                    <img className="rounded-xl img-profile" src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"/>
                </div>
                <div className="w-2/3">
                    <div>
                        <h1 className="text-4xl">Batman (1989)</h1>
                        <div className="flex mt-4">
                            <div className="movie-rating">
                                PG-13
                            </div>
                             <p>
                                Action, Adventure
                            </p>
                        </div>
                        <p className="mt-2">
                            The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.
                        </p>
                        <p className="mt-2">
                            <b>Actors : </b> Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl
                        </p>
                        <p className="mt-2">
                            <b>Director :  </b>Tim Burton
                        </p>
                        <p className="mt-2">
                            <b>Production :  </b>"Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment"
                        </p>
                    </div>
                    <div className="flex mt-6">
                        <div  className="rate-movie flex justify-center items-center flex-col w-1/3 mx-1">
                            <p>Internet Movie Database</p>
                            <p className="my-4  "> 7.5/10</p>
                        </div>
                        <div  className="rate-movie flex justify-center items-center flex-col w-1/3 mx-1">
                            <p>Internet Movie Database</p>
                            <p className="my-4"> 7.5/10</p>
                        </div>
                        <div  className="rate-movie flex justify-center items-center flex-col w-1/3 mx-1">
                            <p>Internet Movie Database</p>
                            <p className="my-4"> 7.5/10</p>
                        </div>
                    </div>

                </div>  

            </div>
        </div>
        </>
    )
}

export default DefaultLayout(detailMovie)
