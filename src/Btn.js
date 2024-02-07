import BStyle from "./Btn.css";

function Btn({text, id, className, clicked, linking}) {
    return(
        <a href={linking} className={className} onClick={clicked} id={id}>{text}</a>
    )
}

export default Btn;
