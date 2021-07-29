import React, {useState} from 'react'
import DoFolder from './DoFolder';
import DoLista from './DoLista'
import FolderForm from './FolderForm';


function FolderList() {
    const [doFolders,setFolder] =useState([]);
    
    //agregar una nueva carpeta
    /*debo vincular el id de una Dolista a una doFolder*/
    const agregarFolder =doFolder =>{
        //doFolder = DoLista;
        //chequeamos que no ingresen vacio
        if(doFolder.text.length === 0){
            return;
        }
        //estoy asignando los objetos bien?
        const nuevaFolder =Object.assign([doFolder, ...doFolders],DoLista);
        setFolder(nuevaFolder);  
    }
    //actualizamos carpeta
    const actualizarFolder = (doFolder_id, nuevoValor) =>{
        //chequeamos que no ingresen vacio
        if(nuevoValor.text.length === 0){
            return;
        }
        setFolder(previo => previo.map(item =>(item.id === doFolder_id ? nuevoValor: item))
        )
    }
    //eliminar carpeta
    const eliminarFolder = id => {
        const eliminar = [...doFolders].filter(doFolder => doFolder.id !== id)
        setFolder(eliminar);
    }
    const toFolder =id =>{
        id=[...doFolders].filter(doFolder => doFolder.id === id)
        if(id === DoLista.id){
            return(
                <DoLista />
            );
        }
    }
    return (
        <div>
            <h1>The Greatest to-do Folders</h1>
            <FolderForm onSubmit={agregarFolder} />
            <DoFolder
            doFolders={doFolders} 
            toFolder={toFolder}
            eliminarFolder={eliminarFolder}
            actualizarFolder={actualizarFolder}
            />
        </div>
    );
}

export default FolderList
