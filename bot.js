const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content.includes('Pizza')) {
    	message.channel.send('and i betta get it too');
  	}
});

client.on('message', message => {
    if (message.content.includes('pizza')) {
    	message.reply('and I betta get it too');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
