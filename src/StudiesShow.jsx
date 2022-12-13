import axios from "axios";
import { useState, useEffect, Component } from "react";
import { ChessGame } from "./ChessGame";
import { OpeningShow } from "./OpeningShow";
import { useParams } from "react-router-dom";
import { Modal } from "./Modal";
import { Confirmation } from "./Confirmation";
import { useRef } from "react";

export function StudiesShow() {
  const [study, setStudy] = useState({});
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  let { id } = useParams();
  const routeStudyId = id;

  const handleStudyShow = () => {
    axios.get("http://localhost:3000/studies/" + routeStudyId + ".json").then((response) => {
      setStudy(response.data);
    });
  };

  const handleStudyUpdate = (params) => {
    const studyId = params.get("study_id");
    axios.patch("http://localhost:3000/studies/" + studyId + ".json", params).then((response) => {
      console.log(response.data);
      console.log("done updating");
      setStudy(response.data);
      setUpdateSuccess(true);
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    });
  };

  const handleOpeningShow = (study) => {
    var opening = Object.assign({}, study.opening);
    opening["resources"] = study.resources;
    opening["common_positions"] = study.common_positions;
    return opening;
  };

  const handleShowConfirm = () => {
    setIsConfirmVisible(true);
  };

  const handleHideConfirm = () => {
    setIsConfirmVisible(false);
  };

  var count = 0;
  var form;

  const changeForm = useRef(null);

  const handleChange = async () => {
    var isTruePublic = changeForm.current.public.value === "true";
    setUpdating(true);

    if (study.public !== isTruePublic) {
      await sleep(10);
    } else {
      await sleep(2000);
    }

    if (count === 0) {
      count += 1;
      form = new FormData(changeForm.current);
      handleStudyUpdate(form);
      setUpdating(false);
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(handleStudyShow, []);

  return (
    <div style={{ backgroundColor: "#C8A2C8", opacity: "0.85" }}>
      <div key={study.id} className="container">
        <div className="row mt-1 mb-3">
          <div key={study.opening?.id} className="col">
            <OpeningShow opening={handleOpeningShow(study)} />
          </div>
          <div className="col mt-5">
            <div>
              <ChessGame openingName={study.opening?.name} />
            </div>
            <form ref={changeForm} id="study-update" onChange={handleChange}>
              <div>
                <input type="hidden" name="opening_id" value={study.opening_id} />
              </div>
              <div>
                <input type="hidden" name="study_id" value={study.id} />
              </div>
              <div>
                <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
                  Notes:
                </label>
                <textarea type="text" name="notes" defaultValue={study.notes} />
              </div>
              {updating && (
                <>
                  <p className="p-1 ms-1" style={{ backgroundColor: "#9a81e3" }}>
                    Updating...
                  </p>
                </>
              )}
              {updateSuccess && (
                <>
                  <p className="p-1 ms-1" style={{ backgroundColor: "#00FF00" }}>
                    Update Complete
                  </p>
                </>
              )}
              <div className="mt-1">
                <h5>Private or Public Study?</h5>
                {study.public ? (
                  <>
                    <input type="radio" name="public" value="true" defaultChecked="yes" /> <label>Public</label>
                    <br />
                    <input type="radio" name="public" value="false" /> <label>Private</label>
                  </>
                ) : (
                  <>
                    <input type="radio" name="public" value="true" /> <label>Public</label>
                    <br />
                    <input type="radio" name="public" value="false" defaultChecked="yes" /> <label>Private</label>
                  </>
                )}
              </div>
            </form>
            <button type="submit" className="btn btn-secondary mt-1" onClick={() => handleShowConfirm(study)}>
              Delete Study
            </button>
            <Modal show={isConfirmVisible} onClose={handleHideConfirm}>
              <Confirmation study={study} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
