import React , { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm.js';

const SongList = () => {
    //useState is a function that can be used to initialize pieces of the state
    // the function useState returns an array for check the first element is the piece of state itself
    // and the second is a function to update that piece of state
    const [songs, setSongs]= useState([
        {title: 'LOYALTY', id: 1},
        {title: 'Beyond', id: 2},
        {title: 'Nights Like This', id: 3}
    ]);
    const addSong = (title) =>{
        // uuid function creates a new unique id everytime it is called
        setSongs([...songs, {title: title, id: uuid()}]);
    }
    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    return(<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    );
};

export default SongList;
