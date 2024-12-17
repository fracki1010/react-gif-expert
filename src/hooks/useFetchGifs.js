import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {


    const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        // setIsLoading(false);
    }


    useEffect(() => {

        getImages();

    }, []);

    /* return {
        imagen: images,
        isLoading: isLoading,
    } */
    //Cuando es como arriba que tienen el mismo nombre, hay que nombrarlos una sola vez

    return {
        images,
        isLoading,
    }
}
