function FeedPostModal({composer, time, text}){
    return(
        <div className="modal fade" id="opened-post" tabindex="-1" aria-labelledby="opendPostLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                </div>
                <div className="modal-body">
                    <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{composer}</h5>
                    <p className="card-text">
                        <small className="text-body-secondary">Last updated {time} ago</small>
                    </p>
                    <p className="card-text">
                        {text}
                    </p>
                    </div>
                    <svg
                    className="bd-placeholder-img card-img-bottom"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-footer">
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default FeedPostModal;