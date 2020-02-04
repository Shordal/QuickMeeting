import React, { useEffect, useReducer } from 'react';
import '../index.css'
import OTSBanner from 'images/OTS-Banner.svg';
import { useFullScreen } from 'react-browser-hooks'
import notesReducer from '../reducers/notes';
import hideContentReducer from '../reducers/visability';
import NoteList from './NoteList'
import QuickContext from '../context/quick-context';
import AddNoteForm from './addNoteForm';
import BannerSelector from '../selectors/Banner';
import bannerReducer from '../reducers/banner';
const QuickMeeting = () => {
    document.title = 'Lone Star Quick Meeting'
    const fs = useFullScreen()
    const [banner, setBanner] = useReducer(bannerReducer, OTSBanner)
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [visable, setVisable] = useReducer(hideContentReducer,
        JSON.parse(localStorage.getItem('visable')) ? true : JSON.parse(localStorage.getItem('visable')))
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])
    useEffect(() => {
        const visable = JSON.parse(localStorage.getItem('visable'))
        if (visable) {
            dispatch({ type: 'SHOW', visable })
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('visable', JSON.stringify(visable))
    }, [visable])
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);
    return (
        <QuickContext.Provider value={{ 
            notes, 
            dispatch, 
            visable, 
            setVisable,
            banner,
            setBanner 
        }}>
            <div className="NoteApp">
                <BannerSelector />
                <NoteList />
                <AddNoteForm />
            </div>
            <div className="NoteApp-bottom-left ">
                <button
                    className="Button--fullScreen"
                    onClick={fs.toggle}>
                    {fs.fullScreen ? 'Exit FullScreen' : 'FullScreen'}
                </button>
            </div>
        </QuickContext.Provider>
    )
};
export { QuickMeeting as default };