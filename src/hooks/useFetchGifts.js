import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


export const useFetchGifts = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    const getImages = async() => {
    const newImages = await getGifts( category );
        setimages(newImages);
        // cuando se deja de cargar
        setIsLoading(false);
    }

    useEffect( () => {

    // codigo secundario que queremos ejecutar
        getImages(); 
    // se llama aqui si no queremos que se este disparando x cantidad de veces

    }, [] );
    /* si dejo las dependencias vacias significa que se va a disparar,
       solo la primera vez que se crea y se contruye el componente
    */
    
    return {
        images,
        isLoading // debe estar en true porque estoy cargandolo
    }

}




// Un hook no es mas que una funcion que regresa algo