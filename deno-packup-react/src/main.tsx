import { React, ReactDOM } from "../deps.ts";
import App from "./App.tsx"

function main() {
  ReactDOM.render(<App />, document.querySelector("#main"));
}

addEventListener("DOMContentLoaded", () => {
  main();
});
