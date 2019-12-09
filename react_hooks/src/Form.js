import React, {useState} from 'react';

const form = React.memo((props) => {
    const [title, setTitle] = useState('title');
    const [desc, setDesc] = useState('desc');

    const submitForm = (e) => {
        e.preventDefault();
        props.addToList(title, desc);
    }

    return (
        <form onSubmit={submitForm}>
            <p><input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /></p>
            <p><input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} /></p>
            <button type="submit">Add</button>
        </form>
    )
})

export default form;