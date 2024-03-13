import "./Btn.css";
function PostSettingBtn({ btn1action, btn2action, id, inModal }) {
  return (
    <div className="btn-group settings-btn">
      <button
        type="button"
        className="btn btn-outline-secondary settings-btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item"
            data-bs-dismiss={inModal}
            data-testid={`test-delete-post-${id}`}
            type="button"
            onClick={() => btn1action(id)}
          >
            Delet post
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#edit-post-" + id}
          >
            Edit post
          </button>
        </li>
      </ul>
    </div>
  );
}
export default PostSettingBtn;
