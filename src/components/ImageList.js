import React from 'react';


//Rendering the list of images
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img key={image.id} src = {image.webformatURL} alt ="image"/>
    })
    return (
        <div>
            {images}

        </div>
    )
}

export default ImageList;