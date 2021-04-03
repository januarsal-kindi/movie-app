import React, { PropsWithChildren , memo } from 'react'

interface imageHeaderProps extends PropsWithChildren<any>{
    image? : string,
}

const ImageHeader: React.FunctionComponent<imageHeaderProps> = (props) => {
    return (
        <div className="container-img-header w-full relative ">
            <img className="img-header  w-full  absolute top-0" src={props.image}/>
        </div>
    )
}
export default memo(ImageHeader)
