import {MdSearch,MdSunny,MdNightlight} from "react-icons/md"
export default function Search ({  darkMode , HandleToggle , HandleSearch }) {
    return (
        <div className="search-section">
        <div className="title-toggle">
          <h1 className="title">Notes <span>App</span></h1>
          <button onClick={()=>HandleToggle((prev)=>!prev)}>

            {!darkMode ? <MdNightlight size= "1.5rem" className="icon" /> : <MdSunny size= "1.5rem" className="icon" /> }
            
            </button>
        </div>
        <div className="search-bar">
            <MdSearch size="1.6rem" />
            <input onChange={(e)=>{HandleSearch(e.target.value)}} type='text' placeholder="Type to search for note..." />
            </div>
      </div>
    );
}