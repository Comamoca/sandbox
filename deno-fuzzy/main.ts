import blessed from "https://esm.sh/blessed@0.1.81";

const screen = blessed.screen({
  smartCSR: true,
});

screen.title = "Deno Fuz";
