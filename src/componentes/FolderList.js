import React, {useState} from 'react'
import DoFolder from './DoFolder';
import FolderForm from './FolderForm';
import DoLista from './DoLista';

function FolderList() {
    const [doFolders,setFolder] =useState([]);

    //agregar una nueva carpeta
    const agregarFolder =doFolder =>{
        //chequeamos que no ingresen vacio
        if(doFolder.text.length === 0){
            return;
        }
        const nuevaFolder =[doFolder, ...doFolders];

        setFolder(nuevaFolder);
    }
    //obtenemos el id que conseguimos cliqueando en la carpeta. (por las dudas)
    const getFolderId =id=>{
        return (id)   
    }
    const toTheFolder = id =>{
        return doFolders.map(id,DoLista)(
            <div key={id}>
                <DoLista/>
            </div>
        )
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

    return (
        <div>
            <h1>The Greatest to-do Folders</h1>
            <FolderForm onSubmit={agregarFolder}/>
            <DoFolder
            doFolders={doFolders} 
            getFolderId={getFolderId}
            toTheFolder={toTheFolder}
            eliminarFolder={eliminarFolder}
            actualizarFolder={actualizarFolder}
            />
        </div>
    );
}

export default FolderList
