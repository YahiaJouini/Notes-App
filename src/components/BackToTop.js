import {MdKeyboardDoubleArrowUp} from "react-icons/md"
export default function BackToTop({handleScroll}){
    return(
        <button onClick={handleScroll} className="back-to-top-btn">Back To Top<MdKeyboardDoubleArrowUp  size="1.8rem"/></button>
    )
}