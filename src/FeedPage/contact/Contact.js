import { useNavigate } from "react-router-dom";

function Contact({ user, setProfileOwner }) {
  const navigate = useNavigate();

  const profPage = () => {
    setProfileOwner(user);
    var proffPage = "/users/" + user.username;
    navigate(proffPage);
  };
  return (
    <a
      // data-bs-toggle="modal"
      // data-bs-target="#notAvail"
      onClick={profPage}
      // data-bs-toggle="dropdown"
      // aria-expanded="false"
      className="list-group-item list-group-item-action"
      style={{ width: "6cm" }}
    >
      <img
        src={`data:image/jpeg;base64,${user.profileImg}`}
        className="ProfPic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
        width={"100px"}
        alt=""
      />
      {user.fName} {user.lName}
    </a>
  );
}
export default Contact;
