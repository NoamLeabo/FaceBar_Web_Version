function SideBarBtn({name, img}){
    return(
        <a data-bs-toggle="modal" data-bs-target="#notAvail" className="list-group-item list-group-item-action" style={{width:"6cm"}}>
        <i className={img}></i>
        <i className="{img}" style={{marginRight:"14px"}}></i>
        {name}
        </a>
    );
}
export default SideBarBtn;