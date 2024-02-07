import BStyle from "./Btn.css";
import { Link } from "react-router-dom";

function Btn({text, id, className, clicked}) {
    return(
    
        <a className={className} onClick={clicked} id={id}>{text}</a>
    
    )
}

export default Btn;
