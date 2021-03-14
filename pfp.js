if (command === '${prefix} profie picture') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your pfp: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		guildOnly: true,
}