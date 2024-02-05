import BStyle from "./Btn.css";

function Btn({text, id, className}) {
    return(
        <a href="#" className={className} id={id}>{text}</a>
    )
}

export default Btn;