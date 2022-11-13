import axios from "axios";
import { useState } from "react";

export function OpeningUpdate(props) {
  const [opening, setOpening] = useState({});

  const handleOpeningUpdate = (params) => {
    axios.patch("http://localhost:3000/openings/" + props.opening.id + ".json", params).then((response) => {
      console.log(response.data);
      setOpening(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("yellow");
    const params = new FormData(event.target);
    handleOpeningUpdate(params);
  };

  const handleDestroy = () => {
    axios.delete("http://localhost:3000/openings/" + props.opening.id + ".json").then((response) => {
      window.location.href = "/";
    });
  };

  return (
    <div>
      <h3>Destroy Opening</h3>
      <button className="mb-1" type="submit" onClick={handleDestroy}>
        Destroy Opening
      </button>

      <h3>Update the Opening</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          Name: <input name="name" type="text" defaultValue={props.opening.name} />
        </div>
        <div className="mb-1">
          Change Image Url: <input name="image_url" type="text" defaultValue={props.opening.image_url} />
        </div>
        <div className="mb-1">
          Description: <input name="description" type="text" defaultValue={props.opening.description} />
        </div>
        <div className="mb-1">
          Difficulty: <input name="difficulty" type="text" defaultValue={props.opening.difficulty} />
        </div>
        <div className="mb-1">
          Variation: <input name="variation" type="text" defaultValue={props.opening.variation} />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
