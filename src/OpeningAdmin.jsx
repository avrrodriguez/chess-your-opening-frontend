import { OpeningCreate } from "./OpeningCreate";
import { OpeningUpdate } from "./OpeningUpdate";
import { ResourceCreate } from "./ResourceCreate";
import { ResourceUpdate } from "./ResourceUpdate";
import { CommonPositionsCreate } from "./CommonPositionsCreate";
import { CommonPositionsUpdate } from "./CommonPositionsUpdate";

export function OpeningAdmin(props) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Admin Options</h1>
      <OpeningUpdate opening={props.opening} />
      <OpeningCreate opening={props.opening} />
      <ResourceUpdate opening={props.opening} />
      <ResourceCreate opening={props.opening} />
      <CommonPositionsUpdate opening={props.opening} />
      <CommonPositionsCreate opening={props.opening} />
    </div>
  );
}
