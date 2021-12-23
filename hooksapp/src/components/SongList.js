import React , { useState, useEffect } from 'react';
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

    // more state
    const [age, setAge] = useState(20);

    // useEffect is a function that takes a callback function as a parameter
    // the callback function is called whenever the component renders or re-renders
    // i.e. whenever the data in the component changes and on the initial render
    // the second parameter is an array of variable we want to watch s.t. the callback is called only when those variables change
    useEffect(()=>{
        console.log('useEffect hook ran', songs);
    }, [songs]);

    useEffect(()=>{
        console.log('useEffect hook ran', age);
    }, [age]);
    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    return(<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age+1)}> Add 1 to age: {age} </button>
        </div>
    );
};

export default SongList;
