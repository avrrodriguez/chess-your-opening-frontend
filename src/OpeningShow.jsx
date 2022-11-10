import { StudyNew } from "./StudyNew";

export function OpeningShow(props) {
  return (
    <div>
      <h1>{props.opening.name}</h1>
      {/* <img src={props.opening.image_url}></img> */}
      <p>Playing Difficulty: {props.opening.difficulty}</p>
      <p>Description: {props.opening.description}</p>
      <p>Moves: {props.opening.variation}</p>
      <small>
        Reading moves: letters and numbers represent the corresponding letters and numbers on the board grid. Only lower
        case letters and numbers represent pawn moves, for example e4 is pawn to e4. N represents the Knight, ex. Nf3 is
        knight to f3. B represents Bishop so Bd3 is Bishop to d3. R is rook so Ra2 is Rook to a2. Q represents the Queen
        and K is the King.
      </small>

      <h3>Resources</h3>
      {props.opening.resources.sort().map((resource) => (
        <div>
          <p>{resource.resource_type}</p>
          <p>{resource.link}</p>
        </div>
      ))}

      <h3>Common Positions</h3>
      {props.opening.common_positions.sort().map((position) => (
        <div>
          <p>Name: {position.name}</p>
          <p>image</p>
          <p>{position.description}</p>
          <p>{position.variation}</p>
        </div>
      ))}
      <StudyNew openingId={props.opening.id} />
    </div>
  );
}
