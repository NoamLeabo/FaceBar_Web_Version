import BStyle from "./Btn.css";
import { Link } from "react-router-dom";

function Btn({text, id, className, clicked, linking}) {
    return(
        <Link to={linking}>
        <a className={className} onClick={clicked} id={id}>{text}</a>
        </Link>
    )
}

export default Btn;
