import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import PropTypes from 'prop-types';
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )
    
    
  return (
    <>
        <h3> { category }</h3>
        {
            isLoading && (<h2> Cargando ... </h2>)
        }
        
        <div className="card-grid"> 
            {
                images.map ( (image) => (
                    <GifItem 
                        key = { image.id }
                        //title={ image.title }
                        //url={ image.url }
                        { ...image }//estot esparciendo toda slas propiedades de image como properties
                    />
                ))
                   
               
            }
            
        </div>
          
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid
