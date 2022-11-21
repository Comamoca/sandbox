import { React } from "../deps.ts";
import Counter from "./components/Counter.tsx";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center">
        Hello from React!
      </h1>
      <p className="card-body">
      </p>
      <Counter/ >
    </div>
  );
}
