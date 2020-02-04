import React, { useContext } from 'react';
import Note from './Note';
import QuickContext from '../context/quick-context';
const NoteList = () => {
    const { notes } = useContext(QuickContext);
    return notes.map((note) => (
        <Note key={ note.title } note={ note }/>
    ))
};
export { NoteList as default };