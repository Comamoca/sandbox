import { Permissions, quickAuth } from "miauth-js";
import * as Misskey from "misskey-js";
import process from "node:process";
import * as readline from "node:readline";

// this snippets omit module imports
const origin = "https://misskey.io";
const permission = [Permissions.AccountRead];

const param = {
  name: "MyApp",
  permission: permission,
};

const miauth = quickAuth(origin, param);

console.log("Let's authentication to this URL✨\n", miauth.authUrl());

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInterface.question("\n☕ Push enter for restart process", (_) => {
  readInterface.close();
});

const token = await miauth.getToken();

const cli = new Misskey.api.APIClient({
  origin: origin,
  credential: token,
});

const i = await cli.request("i", {});

console.log(`Show your profile\n${i.name}@${i.username}\n${i.description}`);
