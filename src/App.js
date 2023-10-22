import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search  from "./components/Search";

export default function App() {
  
  // State Hooks
  const initial=JSON.parse(window.localStorage.getItem('load-date'));
  const [notes,setNotes] = useState(initial || []);
  const [searchText,setSearchText] = useState('');
  const [darkMode,setdarkMode] = useState(false);
    
  
  
    // Setting up LocalStorage
    useEffect(()=>{
      localStorage.setItem("load-date",JSON.stringify(notes));
    },[notes]);

  // Saving Notes
  function HandleSave(text) {

    //getting the current Date
    const date = new Date();
    const currentDate = date.toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' });


    const newNoteList = [...notes,{id:nanoid(),text:text,date:currentDate}];
    setNotes(newNoteList.reverse());
  }


  // Deleting Notes
  function HandleDelete(id) {
    const newNoteList=notes.filter(note=> note.id!==id);
    setNotes(newNoteList);
  };





  return (
    <div className={`container ${darkMode && 'dark-mode'} `}>
      <Search HandleSearch={setSearchText} HandleToggle={setdarkMode} />
      <NotesList
                HandleDelete={HandleDelete} 
                HandleSave={HandleSave} 
                notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))}
                searchText={searchText}
                />
    </div>
  );
}
