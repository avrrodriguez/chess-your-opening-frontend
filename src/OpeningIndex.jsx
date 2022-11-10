export function OpeningIndex(props) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Openings</h1>
      {props.Openings.map((opening) => (
        <div key={opening.id}>
          <div className="card mb-3" style={{ mw: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={opening.image_url}
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
                    onClick={() => {
                      props.onSelectOpening(opening);
                    }}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
