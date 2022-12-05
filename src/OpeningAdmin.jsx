import { OpeningCreate } from "./OpeningCreate";
import { OpeningUpdate } from "./OpeningUpdate";
import { ResourceCreate } from "./ResourceCreate";
import { ResourceUpdate } from "./ResourceUpdate";
import { CommonPositionsCreate } from "./CommonPositionsCreate";
import { CommonPositionsUpdate } from "./CommonPositionsUpdate";

export function OpeningAdmin({ opening }) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Admin Options</h1>
      <OpeningUpdate opening={opening} />
      <OpeningCreate opening={opening} />
      <ResourceUpdate opening={opening} />
      <ResourceCreate opening={opening} />
      <CommonPositionsUpdate opening={opening} />
      <CommonPositionsCreate opening={opening} />
    </div>
  );
}
