const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client();
var token = '';
var divisions = ['open', 'low', 'mid', 'high', 'prem'];

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	switch(msg.content) {
		case '!saturday':
			let attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820429308694495272/image.png');
			msg.channel.send(attachment);
			break;
		case '!endrit':
			let attachment1 = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820717045082619915/image.png');
			msg.channel.send(attachment1);
			break;
		case '!anime':
			msg.reply('\nyea i watch anime\nfuck yo trollgang\nyou suck my dick\nthis is NOT tiktok homie\nthis aint tiktok blood\nu love me, i love you too\nu a troll, then u can get deez nuts\nu a troll, u can get deez balls in your mouf')
			break;
		case '!ask':
			let attachment2 = new MessageAttachment('https://media.discordapp.net/attachments/760549057134329891/820729066663575562/tenor.gif');
			msg.channel.send(attachment2);
			break;
		case '!cry':
			let attachment3 = new MessageAttachment('https://media.discordapp.net/attachments/760549057134329891/820729066663575562/tenor.gif');
			msg.channel.send(attachment3);
			break;
		}

	if (msg.content.startsWith('!div')) {
		let user = msg.mentions.users.first();
		if (user) {
			msg.reply(user + '\'s div is: ' + divisions[getRandomInt(4)]);
		}
		else {
			msg.reply('Your div is: ' + divisions[getRandomInt(4)]);
		}
	}

	if (msg.content.startsWith('!pfp')) {
		let user1 = msg.mentions.users.first();
		if (user1) {
			msg.reply('niggers tounge my anus');
		}
		else {
			msg.reply(msg.author.displayAvatarURL());
		}
	}
});



client.on('guildMemberAdd', member => {
	console.log(member)
	// Send the message to a designated channel on a server:
 	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
 	// Do nothing if the channel wasn't found on this server
 	if (!channel) return;
 	// Send the message, mentioning the member
 	channel.send('The only way out is to beat Luka at ammomod[mge], ${member}.');
});

client.login(token);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
