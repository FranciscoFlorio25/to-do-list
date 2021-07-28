import React, {useState, useEffect, useRef} from 'react'

function DoForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value: '');
    const handleChange = e =>{
        setInput(e.target.value);
    }
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    });

    const handleSubmit = e =>{
    //evitamos refresh de la pagina al apretar el boton
       e.preventDefault();
    
       //agregamos una tarea con un id diferente por cada ingreso
       props.onSubmit({
            id: window.performance.now(),
            text: input
       });
      //reiniciamos el input
      setInput('');
        
    }
    return (
        <form className="formulario" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                type="text" 
                placeholder="Editar" 
                value={input} 
                name='text'
                className="editar"
                onChange={handleChange}
                ref={inputRef}
                />
            <button className='boton_to-do_editar'>Agregar</button>
            </>
            ):(
                <>
                <input 
                type="text" 
                placeholder="agregar actividad" 
                value={input} 
                name='text'
                className="input_to-do"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='boton_to-do'>Agregar</button>
                </>
            )
        }

        </form>
    )
}

export default DoForm
