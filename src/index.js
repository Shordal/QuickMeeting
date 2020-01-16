import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import 'index.css';
import OTSBanner from 'images/OTSBanner.svg';

const notesReducer = (state, action) => {
        switch (action.type) {
            case 'POPULATE_NOTES':
                return action.notes
            case 'ADD_NOTE':
                return [
                    // coppies the exsisting objects to the array
                    ...state,
                    // below adds an object with the title and body of a note
                    { title: action.title, body: action.body }
                ]
            case 'REMOVE_NOTE':
                return state.filter((note) => note.title !== action.title )
            default:
                return state
        }
    }

const hideContentReducer = (state, action) => {
    switch (action.type) {
        case 'HIDE': 
            return action.visable = false
            
        case 'SHOW':
            return { visable: true}
        case 'TOGGLE':
            return action.visable ? false : true
        default:
            return state
    }
}

const QuickMeeting = () => {
    document.title = 'Lone Star Quick Meeting'
        //const [notes, setNotes] = useState([])
        // below is more complex useState
        const [notes, dispatch] = useReducer(notesReducer, [])
        // simple State use
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [visable, setVisable] = useReducer(hideContentReducer, true)
    // const [toggleClick, setToggle] = useState(true)

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
                        type: 'ADD_NOTE',
                        title,
                        body
                    })
                    // setNotes([
                    //     ...notes,
                    //     { 
                    //     title,
                    //     body 
                    //     }
                    // ])
        setTitle('')
        setBody('')
    }

        // fetching data from a database
    useEffect(() => {
        console.log('Fetching local data')
        const notes = JSON.parse(localStorage.getItem('notes'))
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
            // setNotes(notesData)
        }
    }, [])

useEffect(() => {
    console.log('hide or not init load')
    const visable = JSON.parse(localStorage.getItem('visable'))
    if (visable) {
        dispatch({ type: 'SHOW', visable})
    }
}, [])

useEffect(() => {
    localStorage.setItem('visable', JSON.stringify(visable))
}, [visable])

    
    const setVisableHide = (visable) => {
                console.log('Hide')
        setVisable({
            type: 'HIDE',
            visable
        })
    }

    const setVisableShow = (visable) => {
                console.log('show')
        setVisable({
            type: 'SHOW',
            visable
        })
    }
    const setVisableToggle = (visable) => {
                console.log('Toggle')
        setVisable({
            type: 'TOGGLE',
            visable
        })
    }



    const removeNote = (title) => {
            // setNotes(notes.filter((note) => note.title !== title))
            dispatch({
                type: 'REMOVE_NOTE',
                title
            })
        }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div className="NoteApp">
            <img src={OTSBanner} className="App-logo" alt="OTSBanner" />
            {/* <h1 className="NoteApp-header">Lone Star College</h1>
            <h1 className="NoteApp-header">Tomball</h1> */}
            {notes.map((note) => (
                <Note key={note.title} note={note} removeNote={removeNote}/>
            ))}
            <div className={"NoteApp-inputheader"}> 
            <p>Add Content</p>
            {/* <form className="NoteApp-inputcontainer" onSubmit={addNote}>
                <input className="NoteApp-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className="NoteApp-input" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="Button">Add Content</button>
            </form> */}
                            <InputArea key='9' title={title} body={body} visable={visable} setVisableToggle={setVisableToggle} setTitle={setTitle} setBody={setBody} addNote={addNote}/>

            </div>
        </div>
    )
}

const InputArea = ({ setVisableToggle, visable, body,setTitle,setBody, addNote, title }) => {
        // useEffect(() => {

        // }, [])
        return (
            <div className={"NoteApp-inputcontainer"}>
                { visable &&
            <form className="NoteApp-inputcontainer" onSubmit={addNote}>
                <input className="NoteApp-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className="NoteApp-input" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="Button">Add Content</button>
            </form>
}
            {/* <h1 key="3">{visable ? <h1>Test area</h1> : ''}</h1>
            <p key="2">{visable ? <p>!!Test area!!</p> : ''}</p> */}
        <button className="Button" onClick={() => {setVisableToggle(visable)}}>{visable ? 'Hide' : 'Show'}</button>
        {/* <button
            onClick={() => setToggle(toggleClick ? false : true)}>
                {toggleClick ? 'Hide' : 'Show'}
            </button> */}
    </div>
        )
}

const Note = ({ note, removeNote }) => {
        useEffect(() => {
            console.log('Setting up effect!')
            return () => {
                console.log('Cleaning up effect!')
            }
        }, [])
        return (
            <div className="NoteApp-note">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button className="Button-body" onClick={() => removeNote(note.title)}>X</button>
        </div>
        )
    }

ReactDOM.render(<QuickMeeting />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
