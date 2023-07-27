const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const config = require('./config.json');
const channelID = config.channelID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.on("guildMemberAdd", member => {
    const embed = {
      title: `Hoşgeldin`,
      description: `${member} sunucuya katıldı.\nÜye Sayısı: ${member.guild.memberCount}`,
      color: 5763719,
      thumbnail: {
        url: member.user.displayAvatarURL(),
        proxy_url: "a",
        height: 1,
        width: 1
      }
    };
    
    member.guild.channels.cache.get(channelID).send({embeds: [embed]});
});

client.on("guildMemberRemove", member => {
    const embed = {
      title: `Görüşürüz`,
      description: `${member} sunucumuzdan ayrıldı.\nÜye Sayısı: ${member.guild.memberCount}`,
      color: 15548997,
      thumbnail: {
        url: member.user.displayAvatarURL(),
        proxy_url: "a",
        height: 1,
        width: 1
      }
    };
    member.guild.channels.cache.get(channelID).send({embeds: [embed]});
});


client.login(config.token);
