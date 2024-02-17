function Contact({ user }) {
  return (
    <a
      data-bs-toggle="modal"
      data-bs-target="#notAvail"
      className="list-group-item list-group-item-action"
      style={{ width: "6cm" }}
    >
      <img
        src={user.image}
        className="ProfPic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
        width={"100px"}
        alt=""
      />
      {user.FirstName} {user.LastName}
    </a>
  );
}
export default Contact;
