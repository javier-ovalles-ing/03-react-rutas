import React from 'react'
import { useHistory } from 'react-router-dom';

const CrudTableRow = ({el,setDataToEdit, deleteData}) => {
  let {name, constellation, id} = el;
  let history = useHistory();

  const hanndleEdit = ()=> {
    setDataToEdit(el);
    history.push(`editar/${id}`);

  }

  return (
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                <td>
                    <button onClick={hanndleEdit}>Editar</button>
                    <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr>
  )
}

export default CrudTableRow