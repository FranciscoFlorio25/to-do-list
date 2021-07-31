import React, {useState} from 'react';
import DoForm from './DoForm';
import ToDo from './ToDo';
import FolderList from './FolderList';
//iconos
import {IoIosArrowRoundBack} from 'react-icons/io'

function DoLista() {
    const [to_dos,setToDo] =useState([]);
    
    //agregar una nueva tarea
    const agregarToDo =to_do =>{
        //chequeamos que no ingresen vacio
        if(to_do.text.length === 0){
            return;
        }
        const nuevoToDo =[to_do, ...to_dos];
        setToDo(nuevoToDo);
    }
    //actualizamos tarea
    const actualizarToDo = (to_doId, nuevoValor) =>{
        //chequeamos que no ingresen vacio
        if(nuevoValor.text.length === 0){
            return;
        }
        setToDo(previo => previo.map(item =>(item.id === to_doId ? nuevoValor: item))
        )
    }
    //eliminar tarea
    const eliminarToDo = id => {
        const eliminar = [...to_dos].filter(to_do => to_do.id !== id)
        setToDo(eliminar);
    }
    //marcar tarea como completada
    const ToDoComplete = id => {
        let actualizarToDo= to_dos.map(to_do =>{
            if(to_do.id===id){
                to_do.isComplete= !to_do.isComplete;
            }
            return to_do;
        });
        setToDo(actualizarToDo);
    }
    
    return (
        <div>
            <IoIosArrowRoundBack 
            onClick= {<FolderList/> }
            className='icono volver-icono'/>
            <h1>The Greatest to-do list</h1>
            <DoForm onSubmit={agregarToDo} />
            <ToDo 
            to_dos={to_dos} 
            ToDoComplete={ToDoComplete}
            eliminarToDo={eliminarToDo}
            actualizarToDo={actualizarToDo}
            />
        </div>
    );
}

export default DoLista
