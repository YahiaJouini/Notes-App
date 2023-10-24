import {MdDelete} from "react-icons/md";
export default function Note({color,HandleDelete, text , id , date }) {

    function HandleClick(){
        return HandleDelete(id)
    }
    return (
        <div className="note" style={{background:color}}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete className="delete-icon" onClick={()=>HandleClick()} size="1.5rem"/>
            </div>
        </div>
    )
}