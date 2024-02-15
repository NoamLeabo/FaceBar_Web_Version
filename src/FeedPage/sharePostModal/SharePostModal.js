import SideBarBtn from "../sideBar/SideBarBtn";
function SharePostModal(){
    return(
        <div className="modal fade" id="share-post-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Share post</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <SideBarBtn name = "Instagram"  />
                        <SideBarBtn name = "Messenger" />
                        <SideBarBtn name = "Whatsapp" />
                        <div className="d-flex flex-row-reverse">
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SharePostModal;