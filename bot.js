const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("650994913969831939")
setInterval(function() {
channel.send(`تلفيل تلفيل تلفيل تلفيل تلفيل تلفيل تلفيل تلفيل`);
}, 30)
})

client.login(process.env.BOT_TOKEN);