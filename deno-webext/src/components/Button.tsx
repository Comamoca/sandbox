import { React } from "../../deps.ts";

export function PrimaryButton(
  props: { onClick: React.MouseEventHandler<HTMLButtonElement>; text: string },
) {
  return (
    <button onClick={props.onClick} className="btn btn-primary m-1">
      {props.text}
    </button>
  );
}
// () => setcount(count + 1)
