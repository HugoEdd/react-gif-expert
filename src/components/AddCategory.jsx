import { useState } from 'react';



// setCategories -> son practicamente las props
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');
    // desestructuan el event de ahi sale el target
    const onInputChange = ({target}) => {
        setinputValue(target.value);  
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories]);
        // categories trae practicamente el historico

        // Limpiar a caja de texto despues de enviar el valor
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

  return (
    //   (event) => onSubmit(event) -> resumirlo onSubmit
      <form onSubmit={ onSubmit }>
            <input 
        // estos con conocidos como properties, que es HTML al final de cuentas
        type="text"
        placeholder="Buscar Gifts"
        value={ inputValue }
        onChange={ onInputChange }
            />
      </form>
  
  )
}
