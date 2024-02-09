function SideBarBtn({name, img}){
    return(
        <a href="#" className="list-group-item list-group-item-action" style={{width:"6cm"}}>
        <i className={img}></i>
        <i className="{img}" style={{marginRight:"14px"}}></i>
        {name}
        </a>
    );
}
export default SideBarBtn;