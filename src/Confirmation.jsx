import image from "./assets/sadpawn.jpg";
import axios from "axios";

export function Confirmation(props) {
  const handleStudyDestroy = () => {
    axios.delete("http://localhost:3000/studies/" + props.study.id + ".json").then((response) => {
      console.log(response);
      window.location.href = "/";
    });
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex flex-column align-items-center">
        <img src={image} alt="image" />
        <h4>Are You Sure?</h4>
        <button type="submit" onClick={handleStudyDestroy}>
          Yes
        </button>
      </div>
    </div>
  );
}
