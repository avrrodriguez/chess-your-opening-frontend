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
      <div className="d-flex justify-content-between mt-2 mb-2">
        <div className="border ps-5 pe-5" style={{ backgroundColor: "#C8A2C8" }} id="studies-public">
          <h1 className="d-flex justify-content-center">Public Studies</h1>
          {studies.map((study) =>
            study.public ? (
              <div className="mb-2" key={study.id}>
                <h3>{study.opening.name}</h3>
                <img src={study.opening.image_url} style={{ width: "311px", height: "311px" }} />
                <div>
                  <Link className="btn btn-secondary mt-1" to={`/studies/${study.id}`}>
                    Go to Study
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        {localStorage.jwt !== undefined ? (
          <div className="border ps-5 pe-5" id="studies-private" style={{ backgroundColor: "#C8A2C8" }}>
            <h1 className="d-flex justify-content-center">My Studies</h1>
            {studies.map((study) =>
              study.public ? (
                <></>
              ) : (
                <div className="mb-3 mt-2" key={study.id}>
                  <h3>{study.opening.name}</h3>
                  <img src={study.opening.image_url} style={{ width: "311px", height: "311px" }} />
                  <div>
                    <Link className="btn btn-secondary mt-1" to={`/studies/${study.id}`}>
                      Go to Study
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
