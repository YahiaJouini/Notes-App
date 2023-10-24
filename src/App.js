import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search  from "./components/Search";
import BackToTop from "./components/BackToTop";

export default function App() {
  
  // State Hooks
  const initial_data=JSON.parse(window.localStorage.getItem('load-data'));
  const initial_darkMode_data=JSON.parse(window.localStorage.getItem('darkMode-data'));
  const [notes,setNotes] = useState(initial_data || []);
  const [searchText,setSearchText] = useState('');
  const [darkMode,setdarkMode] = useState(initial_darkMode_data || false);
  const colors = ["#fcf2b2","#d0eaec","#fedadb","#fed4a8","#bdcdbb","#cdb1c6","#e8b3c5","#f0f0ed","#c6ceff"];
  const [scroll,setScroll] = useState(false);


  // generating random number to pick a background color for the note
  function random(){
    return Math.floor(Math.random()*colors.length)
  }
  
  // Setting up LocalStorage
  useEffect(()=>{
    localStorage.setItem("load-data",JSON.stringify(notes));
  },[notes]);

  useEffect(()=>{
    localStorage.setItem("darkMode-data",JSON.stringify(darkMode));
  },[darkMode]);


  // cheking the scroll to top button

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setScroll(true);
      }else {
        setScroll(false);
      }
    })

  },[])

  // Saving Notes
  function HandleSave(text) {

    const date = new Date();//getting the current Date
    const currentDate = date.toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short'});

    const newNoteList = [{id:nanoid(),text:text,date:currentDate,color:colors[random()]},...notes];
    setNotes(newNoteList);
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
    }
  };

  function backtotop(){
    window.scrollTo(0,0)
  }

  return (
    <div className={`container ${darkMode? 'dark-mode' : 'light-mode'} `}>
      <div className="search-clear">
      <Search darkMode={darkMode} HandleSearch={setSearchText} HandleToggle={setdarkMode} />
      <button onClick={HandleClearAll}>Clear All</button>
      </div>
      <NotesList
                HandleDelete={HandleDelete} 
                HandleSave={HandleSave} 
                notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))}
                searchText={searchText}
                />
      <div className="scroll-div">{scroll && <BackToTop handleScroll={backtotop} />}</div>
      

    </div>  );
}
