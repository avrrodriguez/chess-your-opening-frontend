import axios from "axios";

export function CommonPositionsUpdate(props) {
  const handleCommonPositionsUpdate = (params, commonPositionId) => {
    axios.patch("http://localhost:3000/common_positions/" + commonPositionId + ".json", params).then((response) => {
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCommonPositionsUpdate(params, event.target.common_positions_id.value);
  };

  const handleDestroy = (commonPositionId) => {
    axios.delete("http://localhost:3000/common_positions/" + commonPositionId + ".json").then((response) => {
      window.location.href = "/";
    });
  };

  return (
    <div className="mt-3">
      <h3>Update Common Positions</h3>
      {props.opening.common_positions.map((commonPosition) => {
        return (
          <div key={commonPosition.id}>
            <form onSubmit={handleSubmit}>
              <div>
                <input type="hidden" name="opening_id" value={commonPosition.opening_id} />
              </div>
              <div>
                <input type="hidden" name="common_positions_id" value={commonPosition.id} />
              </div>
              <div>
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Name:{" "}
                </label>
                <input name="name" type="text" defaultValue={commonPosition.name} />
              </div>
              <div>
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Image url:{" "}
                </label>
                <input name="image_url" type="text" defaultValue={commonPosition.image_url} />
              </div>
              <div>
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  description:{" "}
                </label>
                <input name="description" type="text" defaultValue={commonPosition.description} />
              </div>
              <div>
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Variation:{" "}
                </label>
                <input name="variation" type="text" defaultValue={commonPosition.variation} />
              </div>
              <button className="mt-1" type="Submit">
                Submit
              </button>
            </form>
            <button onClick={() => handleDestroy(commonPosition.id)}>Delete Common Position</button>
          </div>
        );
      })}
    </div>
  );
}
