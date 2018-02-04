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
    if (message.content.includes('rich from head office')) {
        message.channel.send('print off a 10x10 picture of a giraffe and put it out front');
  	}
});

client.on('message', message => {
    if (message.content.includes('ewok')) {
        message.channel.send('jabba the hut');
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
