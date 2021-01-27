const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'gm';
const fs = require('fs');
const memberCounter = require('./counters/memberCounter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}





const config = require('./config.json')


client.once('ready', () => {
    console.log('The client is ready!');
    memberCounter(client)
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    }   
    else if (command === 'youtube'){
        client.commands.get('youtube').execute(message, args); 
    }
    
});

client.login(config.token)