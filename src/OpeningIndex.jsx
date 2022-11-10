export function OpeningIndex(props) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Openings</h1>
      {props.Openings.map((opening) => (
        <div key={opening.id}>
          <div class="card mb-3" style={{ mw: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={opening.image_url} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{opening.name}</h5>
                  <p class="card-text">Playing Difficulty: {opening.difficulty}</p>
                  <p class="card-text">Description: {opening.description}</p>
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
