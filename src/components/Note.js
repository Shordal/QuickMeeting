import React, { useEffect, useContext } from 'react';
import '../index.css'
import QuickContext from '../context/quick-context';

const Note = ({ note }) => {
    const { dispatch } = useContext(QuickContext);

    useEffect(() => {
        return () => {
        }
    }, [])
    return (
        <div className="NoteApp-note">
            <h3 className="NoteApp-note-text">{note.title}</h3>
            <p className="NoteApp-note-text">{note.body}</p>
            <button className="Button__body" onClick={() => dispatch({ 
                type: 'REMOVE_NOTE', 
                title: note.title
            })}>X</button>
        </div>
    )
};

export { Note as default };