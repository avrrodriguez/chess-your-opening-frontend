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
          Notes: <input type="text" name="notes" id="notes" defaultValue="Notes" />
        </div>
        <div>
          <input type="hidden" name="opening_id" value={props.openingId} />
        </div>
        <div>
          <button type="submit">Add to Studies</button>
        </div>
      </form>
    </div>
  );
}
