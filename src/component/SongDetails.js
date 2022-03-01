import React from 'react'
import Loader from './Loader'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({search,lyric,bio}) => {
  if(!lyric || !bio) return null;

  console.log(search);
  /* console.log(lyric); */

  return (
    <>
        {
        lyric.error || lyric.err ||lyric.name === "AbortError" ? 
        <Message msg={`Error: no existe la cancion "<em>${search.song}</em>"`} bgColor="#dc3545"/>:<SongLyric title={search.song} lyrics={lyric.lyrics}/>
        
        }
        {
          bio.artists ? 
          <SongArtist artist={bio.artists[0]}/> : 
          <Message msg={`Error: no existe el interprete <em>${search.artist}</em>`} bgColor="#dc3545"/>
          }
    </>
  )
}

export default SongDetails