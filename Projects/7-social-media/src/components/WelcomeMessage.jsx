import { MdImageNotSupported } from "react-icons/md";
const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcome-message">
      <h1>
        There are no posts <MdImageNotSupported />
      </h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-warning">
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
