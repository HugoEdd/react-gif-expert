import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  // cuando necesitemos almacenar informacion, y esa informormcacion modifica el estado
  // entonces necesitamos un hook
  // useState hay que importarlo -> el punto inicial del estado
  // ! NO PONER HOOKS DENTRO DE CONDICIONALES
  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory= ( newCategory) => {
     // ? si la categoria ya existe, no hagas nada
     if( categories.includes(newCategory) ) return; // si incluye new category, entonces que se salga 
     // ? pero si no existe lo va a insertar

    // el PUSH, vamos a evitar usarlo por el momento
    // Esta es la que selecciona el profe
    setCategories([ newCategory, ...categories ]); 
    // setCategories([...categories, 'Tokyo Ghoul']);
    // setCategories(categories.concat('Demon Slayer')); Mi solucion
  }

  // console.log(categories);

  return (
    <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>  

        {/* Input */}
        <AddCategory 
        // setCategories={ setCategories }
        // cuando lleva la palabra on es porque se esta omitiendo algo
        onNewCategory={  (value) => onAddCategory(value) } // esto es una propiedad de mi componente

        // event => onAddCategory(event) -> onAddCategory
        />
        {/* mandamos la referencia directamente a la funcion setCategories */}

        {/* Listado de Gif */}
        {/* <button onClick={ noAddCategory }>Agregar</button> */}

          {/* el equipo de react dice que no hay que usar el indice que nos tra por defecto js(category, i) */}
            { 
            categories.map( category => 
              // * Quitamos el return pero sigue ahi implicito { return  }
            // en el key puedes poner lo que sea, pero debe de ser unico
              (
                <GifGrid key={ category } category={ category } />
              )) 
            }
         {/* map -> barre cada uno de los elementos de arreglo y nos regresa algo nuevo */}
          {/* Gif Item */}
      
    </>
  )
}



// ? NOTA
/*
Función actualizadora (setFruits en nuestro caso)
 puede recibir una función que tiene como único 
 parámetro el valor actual del estado y retornar el nuevo valor del mismo

 Usando el método concat(), usando la función interna 
 de la función actualizadora o pasando 
 directamente el valor nuevo a la función actualizadora.
*/