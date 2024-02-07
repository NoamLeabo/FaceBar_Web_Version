function SideBarBtn({name, img}){
    return(
        <a href="#" className="list-group-item list-group-item-action">
        <i className={img}></i>
        <i className="{img}"></i>
        {name}
        </a>
    );
}
export default SideBarBtn;