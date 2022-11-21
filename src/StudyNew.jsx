import axios from "axios";

export function StudyNew(props) {
  const handleStudyCreate = (params) => {
    axios.post("http://localhost:3000/studies.json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleStudyCreate(params);
    event.target.reset();
  };

  return (
    <div id="studies-new">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Notes:
          </label>
          <input type="text" name="notes" id="notes" />
        </div>
        <div>
          <input type="hidden" name="opening_id" value={props.openingId} />
        </div>
        <div>
          <input type="hidden" name="public" value="false" />
        </div>
        <div>
          <button type="submit" className="btn btn-secondary mt-1">
            Add to Studies
          </button>
        </div>
      </form>
    </div>
  );
}
