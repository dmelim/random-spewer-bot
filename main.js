import { Client, GatewayIntentBits } from "discord.js";
import response from "./response.js";
import randomNum from "./randomNum.js";
import dotenv from "dotenv";
dotenv.config();

const sign = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

const day = ["today", "tomorrow", "yesterday"];

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "randooom") {
    let randomSign = randomNum(sign);
    let randomDay = randomNum(day);
    const link = `https://aztro.sameerkumar.website/?sign=${randomSign}&day=${randomDay}`;
    await interaction.reply(await response(link));
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
