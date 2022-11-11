import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Studies() {
  const [studies, setStudies] = useState([]);

  const handleStudiesIndex = () => {
    axios.get("http://localhost:3000/studies.json").then((response) => {
      setStudies(response.data);
    });
  };

  useEffect(handleStudiesIndex, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="border ps-5 pe-5" id="studies-public">
          <h1 className="d-flex justify-content-center">Public Studies</h1>
          {studies.map((study) =>
            study.public ? (
              <div className="mb-2">
                <h3>{study.opening.name}</h3>
                <img src={study.opening.image_url} style={{ width: "311px", height: "311px" }} />
                <div>
                  <Link to={`/studies/${study.id}`}>yas yas y as</Link>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="border ps-5 pe-5" id="studies-private">
          <h1 className="d-flex justify-content-center">My Studies</h1>

          {studies.map((study) =>
            study.public ? (
              <></>
            ) : (
              <div className="mb-3 mt-2">
                <h3>{study.opening.name}</h3>
                <img src={study.opening.image_url} style={{ width: "311px", height: "311px" }} />
                <div>
                  <Link to={`/studies/${study.id}`}>yas yas y as</Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
