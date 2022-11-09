export function OpeningIndex(props) {
  return (
    <div>
      <h1>Openings</h1>
      {props.Openings.map((opening) => (
        <div key={opening.id}>
          <h2>{opening.name}</h2>
          <img src={opening.image_url}></img>
          <p>Playing Difficulty: {opening.difficulty}</p>
          <p>Description: {opening.description}</p>
          <button
            onClick={() => {
              props.onSelectOpening(opening);
            }}
          >
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
