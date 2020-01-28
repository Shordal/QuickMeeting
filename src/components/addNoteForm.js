import React, { useState, useContext } from 'react';
import '../index.css'
import QuickContext from '../context/quick-context';
const AddNoteForm = () => {
    const { dispatch, visable, setVisable } = useContext(QuickContext);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const setVisableToggle = (visable) => {
        setVisable({
            type: 'TOGGLE',
            visable
        })
    };
    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    };
    const scrollToBottom = () => {
        setTimeout(function () {
            window.scrollTo({
                left: 0,
                top: document.body.scrollHeight + 268,
                behavior: "smooth"
            });
        }, 2);
    }
    return (
        <div className={"NoteApp-hide"}>
            {visable &&
                <p className={"NoteApp-inputheader"}>Add Content</p>
            }
            {visable &&
                <form className="NoteApp-inputcontainer" onSubmit={addNote}>
                    <input className="NoteApp-input" value={title} onChange={(e) =>
                        setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea className="NoteApp-input" value={body} onChange={(e) =>
                        setBody(e.target.value)}
                        placeholder="Body"
                    />
                    <div className="Button__center">
                        <button className="Button" onClick={() => {
                            setVisableToggle(visable)
                        }}>{visable ? 'Hide' : 'Show'}</button>
                        <button className="Button">Add Content</button>
                    </div>
                </form>
            }
            <div className="NoteApp-bottom">
                {!visable &&
                    <div className="NoteApp-hide">
                        <button className="Button" onClick={() => {
                            setVisableToggle(visable)
                            scrollToBottom()
                            // window.scrollTo({ bottom: 0, top: document.body.scrollHeight, behavior: "smooth" });
                            // window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                        }}>{visable ? 'Hide' : 'Add Content'}</button>
                    </div>
                }
            </div>
        </div>
    )
};
export { AddNoteForm as default };