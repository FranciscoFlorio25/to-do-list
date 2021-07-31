import React, {useState} from 'react'
import FolderForm from './FolderForm'
import DoLista from './DoLista';
//iconos
import {AiFillDelete} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md'
import {BsFolder} from 'react-icons/bs'
import App from '../App';

function DoFolder({doFolders,eliminarFolder, actualizarFolder}) {
   //tratando de guardar una lista nueva dentro del estado
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    //actualizamos carpeta
    const enviarActualizacion = valor => {
        actualizarFolder(edit.id, valor);
        setEdit( {
            id: null,
            value: '',
        });
    }
    //estoy asignanod mal el id seguramente.
    const toTheFolder = id =>{
        return doFolders.map(id,DoLista)(
            <div value={id}>
                <DoLista/>
            </div>
        )
    }
    if(edit.id){
        return <FolderForm 
        edit={edit} 
        onChange={enviarActualizacion}/>
    } 
    return doFolders.map((doFolder, index)=>(
        <div 
         className="folder-fila"
         key ={index} 
        >
            <div className= 'iconos seleccionador_folder' key={doFolder.id} >
                <BsFolder
                    onClick={() => toTheFolder(doFolder.id)}
                 />
                 {doFolder.text}
            </div>
            <div className='iconos'>
             <AiFillDelete
                onClick={() => eliminarFolder(doFolder.id)}
                className='icono-borrar'
             />
             <MdEdit
                onClick={() => setEdit({id: doFolder.id, value: doFolder.text})}
                className='icono-editar'
             />
            </div>
        </div>
    ));
};
export default DoFolder
