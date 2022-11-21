import { React } from "../../deps.ts";
import { PrimaryButton } from "./Button.tsx";

export default function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="card">
    <p className="card-title h2 text-center">{ count }</p>
    <div className="text-center mb-2">
      <PrimaryButton onClick={ () => setCount(count + 1) } text="+1" />
      <PrimaryButton onClick={ () => setCount(count - 1) } text="-1" />
    </div>
    </div>
  );
}
