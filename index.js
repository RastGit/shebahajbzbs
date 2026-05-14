const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`✅ Bot zalogowany jako ${client.user.tag}`);

  // Ustaw avatar
  client.user.setAvatar(
    "https://raw.githubusercontent.com/RastGit/Artol-nMod/refs/heads/main/IcLXL9T0Qyl2.png"
  ).catch(() => console.log("Nie udało się ustawić avatara (cooldown Discord)"));

  // Ustaw status: Online + gra w "Rozwalanie dachów - Artolan"
  client.user.setPresence({
    status: "online",
    activities: [
      {
        name: "Rozwalanie dachów - Artolan",
        type: ActivityType.Playing,
        largeImageKey: "projekt_bez_nazwy",
        largeImageText: "Rozwalanie dachów - Artolan",
      },
    ],
  });

  console.log('🎮 Status ustawiony: Gra w "Rozwalanie dachów - Artolan"');
});

client.login(process.env.DISCORD_TOKEN);
