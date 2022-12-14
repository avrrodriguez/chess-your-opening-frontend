import axios from "axios";

export function ResourceUpdate(props) {
  const handleResourceUpdate = (params, resourceId) => {
    axios.patch("http://localhost:3000/resources/" + resourceId + ".json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };

  const handleDestroy = (resourceId) => {
    axios.delete("http://localhost:3000/resources/" + resourceId + ".json").then((response) => {
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleResourceUpdate(params, event.target.resource_id.value);
  };

  return (
    <div className="mt-3">
      <h3>Update Resource</h3>
      {props.opening.resources.map((resource) => {
        return (
          <div key={resource.id}>
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <input type="hidden" name="resource_id" defaultValue={resource.id} />
              </div>
              <div className="mb-1">
                <input type="hidden" name="opening_id" defaultValue={resource.opening_id} />
              </div>
              <div className="mb-1">
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Link{" "}
                </label>
                <input name="link" type="text" defaultValue={resource.link} />
              </div>
              <div className="mb-1">
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Resource Type{" "}
                </label>
                <input name="resource_type" defaultValue={resource.resource_type} />
              </div>
              <button className="mb-1" type="Submit">
                Submit
              </button>
            </form>
            <button onClick={() => handleDestroy(resource.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
