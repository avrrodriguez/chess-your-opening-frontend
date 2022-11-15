import axios from "axios";
import { useState, useEffect } from "react";
import { ChessGame } from "./ChessGame";
import { OpeningShow } from "./OpeningShow";
import { useParams } from "react-router-dom";

export function StudiesShow() {
  const [study, setStudy] = useState({});

  let { id } = useParams();
  const routeStudyId = id;

  const handleStudyShow = () => {
    console.log(routeStudyId);
    axios.get("http://localhost:3000/studies/" + routeStudyId + ".json").then((response) => {
      console.log(response.data);
      setStudy(response.data);
    });
  };

  const handleStudyUpdate = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    const studyId = params.get("study_id");
    axios.patch("http://localhost:3000/studies/" + studyId + ".json", params).then((response) => {
      console.log(response.data);
      setStudy(response.data);
    });
  };

  const handleStudyDestroy = (study) => {
    axios.delete("http://localhost:3000/studies/" + study.id + ".json").then((response) => {
      console.log(response);
      window.location.href = "/";
    });
  };

  const handleOpeningShow = (study) => {
    var opening = Object.assign({}, study.opening);
    opening["resources"] = study.resources;
    opening["common_positions"] = study.common_positions;
    return opening;
  };

  useEffect(handleStudyShow, []);

  return (
    <div className="" style={{ backgroundColor: "#C8A2C8", opacity: "0.85" }}>
      <div key={study.id} className="container">
        <div className="row mt-1 mb-3">
          <div key={study.opening?.id} className="col">
            <OpeningShow opening={handleOpeningShow(study)} />
          </div>
          <div className="col mt-5">
            <div>
              <ChessGame openingName={study.opening?.name} />
            </div>
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
        </div>
      </div>
    </div>
  );
}
