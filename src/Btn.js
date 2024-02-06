import BStyle from "./Btn.css";

function Btn({text, id, className, clicked}) {
    return(
        <a href="#" className={className} onClick={clicked} id={id}>{text}</a>
    )
}

export default Btn;