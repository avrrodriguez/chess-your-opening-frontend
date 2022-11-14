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
    <div>
      <h3>Resource Create</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <input type="hidden" name="opening_id" value={props.opening.id} />
        </div>
        <div className="mb-1">
          Link: <input name="link" type="text" />
        </div>
        <div className="mb-1">
          Resource type: <input name="resource_type" type="text" />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
