import { useState, useEffect } from "react";
import axios from "axios";

export function Studies(props) {
  const [studies, setStudies] = useState([]);

  const handleStudiesIndex = () => {
    axios.get("http://localhost:3000/studies.json").then((response) => {
      console.log(response.data);
      setStudies(response.data);
    });
  };

  const handleStudyCreate = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/studies.json", params).then((response) => {
      console.log(response.data);
      setStudies([...studies, response.data]);
      event.target.reset();
    });
  };

  const handleStudyUpdate = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    const studyId = params.get("study_id");
    axios.patch("http://localhost:3000/studies/" + studyId + ".json", params).then((response) => {
      console.log(response.data);
      setStudies(
        studies.map((study) => {
          if (study.id === response.data.id) {
            return response.data;
          } else {
            return study;
          }
        })
      );
    });
  };

  const handleStudyDestroy = (study) => {
    axios.delete("http://localhost:3000/studies/" + study.id + ".json").then((response) => {
      setStudies(studies.filter((s) => s.id !== study.id));
    });
  };

  useEffect(handleStudiesIndex, []);

  return (
    <div>
      <h1>My Studies</h1>
      {studies.map((study) => (
        <div key={study.id}>
          <form onSubmit={handleStudyUpdate}>
            <div>
              <input type="hidden" name="opening_id" value={study.opening_id} />
            </div>
            <div>
              <input type="hidden" name="study_id" value={study.id} />
            </div>
            <div>
              Notes: <textarea type="text" name="notes" defaultValue={study.notes} />
            </div>
            <div>
              <button type="change">Update</button>
            </div>
          </form>
          <button type="submit" onClick={() => handleStudyDestroy(study)}>
            Delete Study
          </button>
        </div>
      ))}
      <form onSubmit={handleStudyCreate}>
        <div>
          New Study: <input type="text" name="notes" id="notes" />
        </div>
        <div>
          <input type="hidden" name="opening_id" value="1" />
        </div>
        <div>
          <button type="submit">Add to Studies</button>
        </div>
      </form>
    </div>
  );
}
