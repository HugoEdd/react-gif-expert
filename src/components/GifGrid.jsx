
// import {  useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
// import { getGifts } from "../helpers/getGifs";

// ! NUNCA PONER FUNCIONES DIRECTAMENTE EN FUNCIONAL COMPONENT

export const GifGrid = ({ category }) => {

  

      //  RESUMINENDO TODO LO DE ARRIBA
      const { images, isLoading  } = useFetchGifts( category );

  return (
    //? Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados.
    // ? Cuando estamos trabajando dentro de jsx, no podemos usar la palabra CLASS
    <>
        <h3>{ category }</h3>
        {/* <LoadingMessage isLoading={ isLoading } /> otra forma de hacerlo con un componente personalizado */}
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        {/* los () en esta condicional son opcionales, es un retorn implicito */}
        {/* && si isLoading esta en true va a ejecutar la segunda parte de esta instruccion
            si esta en false ya no continua haciendo las demas evaluaciones */}
        

        <div className="card-grid">
          { images.map ((image) =>  (
            < GifItem 
                  key={ image.id }
                  {...image}
                  // todas las propiedades que vengan en el image, yo las estoy exparciendo
                  // esto sirve para que cada una reciba las propiedades que tiene como properties
                  // title={image.title}
                  // url={ image.url }
            />
          )) }
         
        </div>

        {/* pruebas para evitar la doble ejecucion <h5>{ counter }</h5>
        <button onClick={() => setcounter( counter + 1)}>+1</button> */}
    </>
    )
}
