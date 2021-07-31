import React, {useState} from 'react'
import FolderForm from './FolderForm'
//iconos
import {AiFillDelete} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md'
import {BsFolder} from 'react-icons/bs'

function DoFolder({doFolders,getFolderId,toTheFolder,eliminarFolder, actualizarFolder}) {
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
            <div className= 'iconos' key={doFolder.id} >
                <BsFolder
                    onClick={() => getFolderId(doFolder.id)}
                    onClick={() => toTheFolder(doFolder.id)}
                    className = 'seleccionador_folder'
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
