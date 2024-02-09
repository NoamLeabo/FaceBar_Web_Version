function ImgBtn({target, toggle, img}){
    return(
        <button type="button" class="btn active reg-btn" data-bs-toggle={toggle} data-bs-target={target} >
            <i class={img}></i>
        </button>
    );
}
export default ImgBtn;