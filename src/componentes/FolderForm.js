import React, {useState, useEffect, useRef} from 'react'

function FolderForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value: '' );

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
       //agregamos una carpeta con un id diferente por cada ingreso
       props.onSubmit({
            id: window.performance.now(),
            text: input,
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
                className="folder_input_editar"
                onChange={handleChange}
                ref={inputRef}
                />
            <button className='boton_DoFolder_editar'>Agregar</button>
            </>
            ):(
                <>
                <input 
                type="text" 
                placeholder="agregar carpeta" 
                value={input} 
                name='text'
                className="input_folder"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='boton_do-folder'>Agregar</button>
                </>
            )
        }

        </form>
    );
}

export default FolderForm
