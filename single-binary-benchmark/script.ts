import { $ } from "jsr:@david/dax";

const cmds = {
  "deno": "deno compile --output out_deno ./main.ts",
  "bun": "bun build ./main.ts --compile --outfile out_bun",
  "go": "go build",
};

// Build binary.
const build = async () => {
  for await (const name of Object.keys(cmds)) {
    console.log("Build binary.");
    const cmd = cmds[name];

    Deno.chdir(`./${name}/`);
    await $(cmds[name]);
    Deno.chdir("../");
  }
};

// take benchmark with hyprfine.
const bench = async () => {
  for await (const name of Object.keys(cmds)) {
    console.log("Take benckmark.");
    const hyprfine =
      `hyperfine -w 5 --shell=none --export-markdown ./reports/report_${name}.md "./${name}/out_${name} 1 2"`;

    console.log(`Benck: ${hyprfine}`);

    await $(hyprfine);
  }
};

// Correct report.
const correct_report = async () => {
  const reports = [];

  for await (const name of Object.keys(cmds)) {
    const report_path = `./reports/report_${name}.md`;
    console.log(`Load: ${report_path}`);
    const report = await Deno.readTextFile(report_path);
    reports.push(report);
  }

  const header = reports[0].split("\n").slice(0, 2);
  const table = reports.map((report) =>
    report.split("\n").slice(2).filter((str) => str.length > 0)
  ).flat();

  const report_out = "report.md";
  await Deno.writeTextFile(report_out, header.concat(table).join("\n"));
  console.log(`Report write to ${report_out}`);
};

const cmd = Deno.args[0];

if (cmd == "build") {
  await build();
} else if (cmd == "bench") {
  await bench();
} else if (cmd == "report") {
  await correct_report();
} else {
  await build();
  await bench();
  await correct_report();
}
