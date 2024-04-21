import { Alert } from "react-bootstrap";

function PostAlert({ shouldHide, setShouldHide, closeAlert }) {
  const handleClose = () => {
    setShouldHide(false);
  };
  return (
    <Alert
      variant="danger"
      onClose={() => setShouldHide(false)}
      dismissible
      style={{ marginBottom: "12px", paddingBottom: "70px", height: "75px" }}
    >
      <Alert.Heading>Oh no!</Alert.Heading>
      <p>It seems like you've tried entering an unauthorized link.</p>
    </Alert>
  );
}
export default PostAlert;
