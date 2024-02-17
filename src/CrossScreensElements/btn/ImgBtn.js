function ImgBtn({ target, toggle, img }) {
  return (
    <button
      type="button"
      className="btn active reg-btn"
      data-bs-toggle={toggle}
      data-bs-target={target}
    >
      <i className={img}></i>
    </button>
  );
}
export default ImgBtn;
