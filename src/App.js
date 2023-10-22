import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search  from "./components/Search";

export default function App() {
  
  // State Hooks
  const initial=JSON.parse(window.localStorage.getItem('load-data'));
  const [notes,setNotes] = useState(initial || []);
  const [searchText,setSearchText] = useState('');
  const [darkMode,setdarkMode] = useState(false);
  const colors = ["#fcf2b2","#d0eaec","#fedadb","#fed4a8"];


  function random(){
    return Math.floor(Math.random()*colors.length)
  }
  
  // Setting up LocalStorage
  useEffect(()=>{
    localStorage.setItem("load-data",JSON.stringify(notes));
  },[notes]);

  // Saving Notes
  function HandleSave(text) {

    //getting the current Date
    const date = new Date();
    const currentDate = date.toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short'});


    const newNoteList = [...notes,{id:nanoid(),text:text,date:currentDate,color:colors[random()]}];
    setNotes(newNoteList.reverse());
  }


  // Deleting Notes
  function HandleDelete(id) {
    const newNoteList=notes.filter(note=> note.id!==id);
    setNotes(newNoteList);
  };

  // Deleting All Notes

  function HandleClearAll(){
    if(notes.length>0 ){
      if(window.confirm("Are You Sure ?")){
        setNotes([]);
      }
    }else {
      alert("There are no notes to clear !");
    }
  }

  return (
    <div className={`container ${darkMode? 'dark-mode' : 'light-mode'} `}>
      <div className="search-clear">
      <Search HandleSearch={setSearchText} HandleToggle={setdarkMode} />
      <button onClick={HandleClearAll}>Clear All</button>
      </div>
      <NotesList
                HandleDelete={HandleDelete} 
                HandleSave={HandleSave} 
                notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))}
                searchText={searchText}
                />
    </div>
  );
}
