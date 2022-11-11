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
    <div>
      <h1 className="d-flex justify-content-center">My Studies</h1>

      {studies.map((study) => (
        <div key={study.id}>
          <Link to={`/studies/${study.id}`}>yas yas y as</Link>
        </div>
      ))}
    </div>
  );
}
