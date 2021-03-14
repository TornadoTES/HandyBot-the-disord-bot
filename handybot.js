const token = 'ODIwNDA1ODIwOTYwNDA3NTcz.YE0sdg.JDFIH8GpY86sMGX8BzAlyGQ5IK8';
const {welcome, purge, kick, ban, status, say, mute} = require("discord-bot-maker");
const Discord = require("discord.js");
const bot = new Discord.Client();
 
welcome(bot, {
  privatemsg : "Hello @MEMBER, I hope you have a good time here.", 
  publicmsg : "@MEMBER just joined. Say hello!", //@GUILDNAME @MEMBER
  publicchannelid : "999999999999999999" //CHANNEL ID
});
 
kick(bot, {
  prefix:"!hb",
  kickcommand: "kick",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Oh no! someone kicked you.",
  kickmsg: "@KICKAUTHOR @KICKEDUSER @REASON" //@KICKAUTHOR @KICKEDUSER @REASON
});
 
ban(bot, {
	prefix: "!hb",
  bancommand: "ban",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  higherroleerrormsg: "Higher Role Error",
  defaultreason: "Oh no! someone kicked you.",
  banmsg: "Ban Message" //@BANAUTHOR @BANNEDUSER @REASON
});
 
status(bot, {
  type: "WATCHING", //PLAYING, WATCHING, STREAMING
  title: "welcome channels"
});
 
mute(bot, {
  prefix:"!hb",
  nopermmsg: "No Perm Error",
  mentionerrormsg: "Mention Error",
  alreadyhasrole: "Already Has Role Error",
  roleid: "999999999999999999", //SECONDARY ROLE ID*
  defaultreason: "Default Reason",
  mutemsg: "@MUTEDUSER, @MUTEAUTHOR, @REASON" //@MUTEDUSER, @MUTEAUTHOR, @REASON
});
 
bot.login(ODIwMTMzMTU1MDMzOTcyNzM2.YEwuhQ.l3QP3KD1VS0hdeJf69BT_ - 2Nlvg)

const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('ODIwNDA1ODIwOTYwNDA3NTcz.YE0sdg.JDFIH8GpY86sMGX8BzAlyGQ5IK8');
}
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		client.commands.get('help').execute(message, args);
	} else if (command === 'profile picture') {
		client.commands.get('profile picture').execute(message, args);
	} else if (command === 'server') {
		client.commands.get('server').execute(message, args);
	} else if (command === 'whoami') {
		client.commands.get('whoami').execute(message, args);
  } else if (command === 'what is the meaning of life') {
		client.commands.get('what is the meaning of life').execute(message, args);
});

if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error!!');
}

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('That command is inop. in a DM!');
}

const commandFolders = fs.readdirSync('./commands');
const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));
delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
try {
	const newCommand = require(`../${folderName}/${command.name}.js`);
	message.client.commands.set(newCommand.name, newCommand);
} catch (error) {
	console.error(error);
	message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
}
