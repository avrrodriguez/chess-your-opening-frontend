import { OpeningCreate } from "./OpeningCreate";
import { OpeningUpdate } from "./OpeningUpdate";
import { ResourceCreate } from "./ResourceCreate";
import { ResourceUpdate } from "./ResourceUpdate";

export function OpeningAdmin(props) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Admin Options</h1>
      <OpeningUpdate opening={props.opening} />
      <OpeningCreate />
      <ResourceUpdate opening={props.opening} />
      <ResourceCreate opening={props.opening} />
    </div>
  );
}
