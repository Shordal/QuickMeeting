import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import OTSBanner from './images/OTSBanner.svg';

const NoteApp = () => {
    document.title = 'Lone Star'
    const notesData = JSON.parse(localStorage.getItem('notes'))
    const [notes, setNotes] = useState(notesData || [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    return (
        <div className="NoteApp">
            <img src={OTSBanner} className="App-logo" alt="OTSBanner" />
            {/* <h1 className="NoteApp-header">Lone Star College</h1>
            <h1 className="NoteApp-header">Tomball</h1> */}
            {notes.map((note) => (
                <div className="NoteApp-note" key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button className="Button-body" onClick={() => removeNote(note.title)}>Remove</button>
                </div>
            ))}
            <div className="NoteApp-inputheader"> 
            <p>Add Content</p>
            <form className="NoteApp-inputcontainer" onSubmit={addNote}>
                <input className="NoteApp-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className="NoteApp-input" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="Button">Add Content</button>
            </form>
            </div>
        </div>
    )
}

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('useEffect ran')
        document.title = count
    })

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>reset</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
