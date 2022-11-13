import { OpeningCreate } from "./OpeningCreate";
import { OpeningUpdate } from "./OpeningUpdate";

export function OpeningAdmin(props) {
  return (
    <div>
      <OpeningUpdate opening={props.opening} />
      <OpeningCreate />
    </div>
  );
}
