import React, { memo } from 'react'
import Modal from '../../../components/modal'

type ModalImageProps = {
    showModalImages : boolean,
    onCloseModalImage : VoidFunction,
    urlImage : string|null | undefined
}

const popupImage : React.FunctionComponent<ModalImageProps> = (props :ModalImageProps ) => {
    return (
        <Modal
        title="Image"
        isShowModal ={props.showModalImages}
        onCloseModal={props.onCloseModalImage}
        >
            {props.urlImage ? (
                <img src={props.urlImage}/>
            ) : (
                <div> </div>
            )}
        </Modal>
    )
}

export default memo(popupImage)