import React, { PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren<any>{
    onClickImage:(urlImage:string | undefined) => void,
    onClickCard: (movieId:string) => void,
    image? : string,
    title ? : string,
    years?: string | undefined,
    type?: string ,
    idMovie : string

}

const defautCardProps : CardProps ={
    onClickImage:()=> ({}),
    onClickCard: () => {},
    idMovie : ''

}
const Card: React.FunctionComponent<CardProps> = (props) => {
    return (
        <>
            <div className="cursor-pointer max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img className="w-full h-72 object-cover object-center cursor-pointer"
                    src={props.image}
                    alt="avatar"
                    onClick={() => props.onClickImage(props.image)}
                />
                <div className="py-4 px-6"
                    onClick={() => props.onClickCard(props.idMovie)}
                >
                    <h1 className="text-2xl font-semibold text-gray-800">{props.title} ({props.years})</h1>
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                        </svg>
                        <h1 className="px-2 text-sm">{props.type}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
Card.defaultProps = defautCardProps;
export default Card
