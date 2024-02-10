import EditPostModal from '../../FeedPage/editPostModal/EditPostModal';
import './Btn.css';
function SettingBtn({ btn1action, btn2action, id}){
    return(
        <div class="btn-group settings-btn">
            <button type="button" class="btn btn-outline-secondary settings-btn" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                {/* <li><button class="dropdown-item" type="button" onClick={() => btn1action(id)}>{btn1text}</button></li> */}
                <li><button class="dropdown-item" type="button" onClick={() => btn1action(id)}>Delet post</button></li>
                <li><button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target={"#edit-post-" + id}>Edit post</button></li>
            </ul>
        </div>
    );
}
export default SettingBtn;