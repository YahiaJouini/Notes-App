import {MdSearch} from "react-icons/md"
export default function Search ({  HandleToggle , HandleSearch }) {
    return (
        <div className="search-section">
        <div className="title-toggle">
          <h1>Notes App With LocalStorage ! </h1>
          <button onClick={()=>HandleToggle((prev)=>!prev)}>ToggleMode</button>
        </div>
        <div className="search-bar">
            <MdSearch size="1.6rem" />
            <input onChange={(e)=>{HandleSearch(e.target.value)}} type='text' placeholder="Type to search for note..." />
            </div>
      </div>
    );
}