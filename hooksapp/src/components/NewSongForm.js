import React, { useState } from 'react';

// destructured assignment of the props passed in to the NewSongForm component
const NewSongForm = ({ addSong }) => {
    // initalize title to empty string
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        // prefents the default behavior of a page refresh after form submission
        e.preventDefault();
        console.log(title);
        addSong(title);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" required value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <input type="submit" value="Add Song"/>
        </form>
    );
};

export default NewSongForm;
