import React, {useState} from 'react'
import DoForm from './DoForm'
//iconos
import {AiFillDelete} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md'
import {MdTouchApp} from 'react-icons/md'


function ToDo  ({to_dos, ToDoComplete, eliminarToDo, actualizarToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const enviarActualizacion = valor => {
        actualizarToDo(edit.id, valor);
        setEdit({
            id: null,
            value:""
        });
    }
    if(edit.id){
        return <DoForm 
        edit={edit} 
        onSubmit={enviarActualizacion}/>
    }
    //existe un problema, el usuario debe tocar la palabra, sino no sé marcara como completado.
    return to_dos.map((to_do, index)=>(
        <div 
         className={to_do.isComplete ? 'do_fila completo' :'do_fila'}
         key ={index} 
        >
            <div className= 'seleccionador' key={to_do.id} >
                <MdTouchApp
                    onClick={() => ToDoComplete(to_do.id)}
                 />
                 {to_do.text}   
            </div>
            <div className='iconos'>
             <AiFillDelete
                onClick={() => eliminarToDo(to_do.id)}
                className='icono-borrar'
             />
             <MdEdit
                onClick={() => setEdit({id: to_do.id, value: to_do.text})}
                className='icono-editar'
             />

            </div>
        </div>
    ));
};

export default ToDo
