function ContentNotAvailable(){
    return(
        <div className="modal fade" id="notAvail" tabIndex="100002" aria-labelledby="opendPostLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >Content is not available</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>this content is not available at this moment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentNotAvailable;