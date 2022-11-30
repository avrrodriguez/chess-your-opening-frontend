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
    <div className="mt-3">
      <h3>Common Positions Create</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Name:{" "}
          </label>
          <input name="name" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Description:{" "}
          </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Variation:{" "}
          </label>
          <input name="variation" type="text" />
        </div>
        <div>
          <input type="hidden" name="opening_id" value={props.opening.id} />
        </div>
        <button className="mt-1" type="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
