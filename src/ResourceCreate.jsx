import axios from "axios";

export function ResourceCreate(props) {
  const handleResourceCreate = (params) => {
    axios.post("http://localhost:3000/resources.json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleResourceCreate(params);
    event.target.reset();
  };

  return (
    <div className="mt-3">
      <h3>Resource Create</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="hidden" name="opening_id" value={props.opening.id} />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Link:{" "}
          </label>
          <input name="link" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Resource type:{" "}
          </label>
          <input name="resource_type" type="text" />
        </div>
        <button className="mt-1" type="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
