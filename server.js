if (message.content === `${prefix} server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    guildOnly: true,
}