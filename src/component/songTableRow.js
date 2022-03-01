import React from 'react'
import { useHistory } from 'react-router-dom';

const SongTableRow = ({id, el, handleDeleteSong}) => {
    let {bio, search} = el;
    let avatar = bio.artists[0].strArtistThumb;
    let avatarStyles = {
      with:"auto",
      height:"40px"
    } 
    console.log(el);
    
    let history = useHistory();
  return (
  <tr>
      <td>
          <img style={avatarStyles} src={avatar} alt={search.artist}/>
      </td>
      <td>Nombre artista</td>
      <td>Nombre cancion</td>
      <td>
        <button onClick={()=>history.push(`/${id}`)}>ver</button>
        <button onClick={()=>handleDeleteSong(id)}>Eliminar</button>
      </td>


  </tr>)
}

export default SongTableRow