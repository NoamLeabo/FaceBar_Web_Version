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
      onClick={profPage}
      className="list-group-item list-group-item-action"
      type="button"
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
