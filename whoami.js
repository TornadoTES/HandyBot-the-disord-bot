if (message.content === `${prefix} whoami`) {
	message.channel.send(`Your name is: ${message.author.username}\nYour ID is: ${message.author.id}`);
	guildOnly: false,
}