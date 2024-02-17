function CreatePostButton({ loggedinUser }) {
  return (
    <div className="card">
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#create-post"
          id="create-post-btn"
        >
          What's on your mind, {loggedinUser.FirstName}?
        </button>
      </div>
    </div>
  );
}

export default CreatePostButton;
