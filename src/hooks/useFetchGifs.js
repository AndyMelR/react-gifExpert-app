import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
//un hook no es más que una función que regresa algo
const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState ( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading( false )
        
    }

    useEffect (() => {
        getImages();
    } , [ ])

  return {
    images,
    isLoading
  }
}

export default useFetchGifs
