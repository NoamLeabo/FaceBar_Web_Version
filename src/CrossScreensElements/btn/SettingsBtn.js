import './Btn.css';
function SettingBtn({btn1text, btn1action, btn2text, btn2action, id}){
    return(
        <div class="btn-group settings-btn">
            <button type="button" class="btn btn-outline-secondary settings-btn" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><button class="dropdown-item" type="button" onClick={() => btn1action(id)}>{btn1text}</button></li>
                <li><button class="dropdown-item" type="button" onClick={btn2action}>{btn2text}</button></li>
            </ul>
        </div>
    );
}
export default SettingBtn;