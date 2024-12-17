
import React, { useEffect, useState } from 'react'

import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {


   const { images, isLoding } = useFetchGifs(category);


   

    return (

        <>
            <h3>{category}</h3>

            {
                //se usa para realizar la accion si es verdadero y si no lo es, no hace nada
            isLoding && (<h2 >cargando...</h2>)
            
            
            }


            <div className='card-grid'>
                {
                    //Usamos la desestructuracion para obtener el title y el id
                    images.map((image) => (
                        <GifItem 
                        key={image.id} 
                        //Estamos esparciendo las propiedades con el spred
                        { ...image } />
                    ))
                }
            </div>

        </>
    )
}
