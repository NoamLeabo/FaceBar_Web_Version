function SideBarBtn({name, img}){
    return(
        <a data-bs-toggle="modal" data-bs-target="#notAvail" className="list-group-item list-group-item-action SBBtn-class">
        <i className={img}></i>
        <i className="{img} SBImg-class"></i>
        {name}
        </a>
    );
}
export default SideBarBtn;