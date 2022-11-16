import { StudyNew } from "./StudyNew";
import { useParams } from "react-router-dom";

export function OpeningShow(props) {
  let { id } = useParams();

  return (
    <div key={props.opening?.id} className="container">
      <h1 className="d-flex justify-content-center">{props.opening?.name}</h1>
      <div style={{ backgroundColor: "#CBC3E3", width: "130px" }}>Playing Difficulty:</div>
      <p>{props.opening?.difficulty}</p>
      <div style={{ backgroundColor: "#CBC3E3", width: "90px" }}>Description:</div> <p>{props.opening?.description}</p>
      <div style={{ backgroundColor: "#CBC3E3", width: "60px" }}>Moves:</div>
      <p>{props.opening?.variation}</p>
      <div style={{ backgroundColor: "#CBC3E3" }}>
        <small>
          Reading moves: Letters and numbers represent the corresponding letters and numbers on the board grid. Only
          lower case letters and numbers represent pawn moves, for example e4 is pawn to e4. N represents the Knight,
          ex. Nf3 is knight to f3. B represents Bishop so Bd3 is Bishop to d3. R is rook so Ra2 is Rook to a2. Q
          represents the Queen and K is the King.
        </small>
      </div>
      <h3 className="mt-3">Resources</h3>
      {props.opening.resources?.sort().map((resource) => (
        <div key={resource.id}>
          <div style={{ backgroundColor: "#CBC3E3", width: "110px" }}>Resource Type</div>
          <p>{resource.resource_type}</p>
          <div style={{ backgroundColor: "#CBC3E3", width: "110px" }}>Resource Link</div>
          <p>{resource.link}</p>
        </div>
      ))}
      <h3 className="mt-3">Common Positions</h3>
      {props.opening.common_positions?.sort().map((position) => (
        <div key={position.id}>
          <div style={{ backgroundColor: "#CBC3E3", width: "50px" }}>Name:</div>
          <p>{position.name}</p>
          <div style={{ backgroundColor: "#CBC3E3", width: "90px" }}>Description:</div>
          <p>{position.description}</p>
          <div style={{ backgroundColor: "#CBC3E3", width: "60px" }}>Moves:</div>
          <p>{position.variation}</p>
        </div>
      ))}
      {localStorage.jwt !== undefined && window.location.href !== `http://localhost:5173/studies/${id}` ? (
        <div>
          <StudyNew openingId={props.opening?.id} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
