import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {

        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();

        //Si es menor a 2 letras no se va a escribir y retorna nada como lo mostramos
         if(inputValue.trim().length <= 1) return


        //Inserta las categorias con un callback, osea que al llamar un event del mismo set categories
        //trae todo el estado inicial 
       /* setCategories(categories => [inputValue, ...categories]);

        //Para borrar todo lo que esta en el input y podamos escribir tranquilos
        setInputValue(''); */

        //ESTA ES OTRA MANERA DE HACERLO
        
         
        onNewCategory(inputValue);

        //Para borrar todo lo que esta en el input y podamos escribir tranquilos
        setInputValue('');
        
        
    }


    return (
        <form onSubmit={(event) => onSubmit(event)} >

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
