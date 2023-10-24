import { useState } from "react"
export default function AddNewNote({searchText,HandleSave}) {
    const [newNote, setNewNote] = useState("");
    const characterLimit=200;
    function HandleChange(e) {
        if(searchText!==""){
            alert('Empty Your Search Field !');
            return;
        }
        if(characterLimit-e.target.value.length>=0) {
            setNewNote(e.target.value);
        }
    }
    function Update() {
        HandleSave(newNote);
        setNewNote('');
    }
    return (
        <div className="note new">
            <textarea placeholder="Add New Note..." value={newNote} onChange={HandleChange}></textarea>
            <div className="note-footer">
                <small>{characterLimit-newNote.length} Remaining</small>
                <button className="save" onClick={Update} disabled={newNote==="" || searchText!=="" }>Save</button>
            </div>
        </div>
    )
}