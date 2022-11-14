import axios from "axios";

export function CommonPositionsCreate(props) {
  const handleCommonPositionsCreate = (params) => {
    axios.post("http://localhost:3000/common_positions.json", params).then((response) => {
      console.log("response.data");
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCommonPositionsCreate(params);
    event.target.reset;
  };

  return (
    <div>
      <h3>Common Positions Create</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          Name: <input name="name" type="text" />
        </div>
        <div className="mb-1">
          Description: <input name="description" type="text" />
        </div>
        <div className="mb-1">
          Image url: <input name="image_url" type="text" />
        </div>
        <div className="mb-1">
          Variation: <input name="variation" type="text" />
        </div>
        <div className="mb-1">
          <input type="hidden" name="opening_id" value={props.opening.id} />
        </div>
        <button className="mb-1" type="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
