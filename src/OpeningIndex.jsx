import { useState } from "react";

export function OpeningIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1 className="d-flex justify-content-center" style={{ backgroundColor: "#C8A2C8" }}>
        Openings
      </h1>
      <div>
        <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
          Search Filter:
        </label>
        <input type="text" value={searchFilter} onChange={() => setSearchFilter(event.target.value)} list="titles" />
        <datalist id="titles">
          {props.Openings.map((opening) => (
            <option key={opening.id}>{opening.name}</option>
          ))}
        </datalist>
      </div>

      {props.Openings.filter((opening) => opening.name.toLowerCase().includes(searchFilter.toLowerCase())).map(
        (opening) => (
          <div key={opening.id}>
            <div className="card mb-3" style={{ mw: "540px", backgroundColor: "#C8A2C8" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={opening.opening_image?.image_url}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ width: "311px", height: "311px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{opening.name}</h5>
                    <p className="card-text">Playing Difficulty: {opening.difficulty}</p>
                    <p className="card-text">Description: {opening.description}</p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        props.onSelectOpening(opening);
                      }}
                    >
                      More Info
                    </button>
                    <div>
                      {localStorage.jwt !== undefined && localStorage.user_admin ? (
                        <button
                          type="button"
                          className="btn btn-info mt-1"
                          onClick={() => {
                            props.onSelectOpeningAdmin(opening);
                          }}
                        >
                          Admin Settings
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
