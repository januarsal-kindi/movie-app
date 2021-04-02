import React from 'react'
import { useHistory } from "react-router-dom";
import DefaultLayout from '../../shared/hoc/defaultLayout'
import Card from '../../components/card'
import ModalImage from './views/modal-image' ;
import { useState } from 'react'
const Home: React.FC = () => {
    const history = useHistory()
    const [imagePopUp,setImagePopup] = useState<string | null> (null)
    const [showModalImage,setShowModalImage] = useState<boolean> (false)

    const clickImageCardHandler = (imageUrl : string) => {
        setImagePopup(imageUrl)
        setShowModalImage(true)
    }

    const clickCardHandler = () => {
        history.push('/detail')
    }
    return (
        <>
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-4 auto-cols-max gap-6">
                <Card
                    onClickImage={clickImageCardHandler}
                    onClickCard={clickCardHandler}
                ></Card>
                  <Card
                    onClickImage={clickImageCardHandler}
                    onClickCard={clickCardHandler}

                ></Card>
                  <Card
                    onClickImage={clickImageCardHandler}
                    onClickCard={clickCardHandler}

                ></Card>
                  <Card
                    onClickImage={clickImageCardHandler}
                    onClickCard={clickCardHandler}

                ></Card>
                  <Card
                    onClickImage={clickImageCardHandler}
                    onClickCard={clickCardHandler}

                ></Card>
                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </div>
        <ModalImage
                    showModalImages={showModalImage}
                    onCloseModalImage={()=> {setShowModalImage(false)}}
                    urlImage={imagePopUp}
                />

        </>
    )
}

export default DefaultLayout(Home)
