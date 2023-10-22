import Note from "./Note";
import AddNewNote from "./AddNewNote";
import {nanoid} from "nanoid";
export default function NotesList ({searchText,HandleDelete, notes , HandleSave }) {
    return (
        <div className="notes-container">
            <AddNewNote searchText={searchText} HandleSave={HandleSave} />
            {
                notes.map(note=> <Note key={nanoid()} 
                                    HandleDelete={HandleDelete} 
                                    text={note.text} 
                                    id = {note.id} 
                                    date = {note.date} 
                                    color={note.color}
                                    />)
            }
        </div>
    )
}