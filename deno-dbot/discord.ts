import { createBot, Intents, startBot } from "https://deno.land/x/discordeno@13.0.0/mod.ts";

console.log("Server Start!!😈")

const bot = createBot({
  token: Deno.env.get("TOKEN"),
  intents: Intents.Guilds,
  events: {},
});

// Another way to do events
bot.events.messageCreate = function (b, message) {
  console.log(b, message)
  // Process the message here with your command handler.
};

await startBot(bot);
