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
			console.log("recieved saturday");
			let attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820429308694495272/image.png');
			msg.channel.send(attachment);
			break;
		case '!endrit':
			console.log("recieved endrit");
			let attachment1 = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820717045082619915/image.png');
			msg.channel.send(attachment1);
			break;
		case '!anime':
			console.log("recieved anime");
			msg.reply('\nyea i watch anime\nfuck yo trollgang\nyou suck my dick\nthis is NOT tiktok homie\nthis aint tiktok blood\nu love me, i love you too\nu a troll, then u can get deez nuts\nu a troll, u can get deez balls in your mouf')
			break;
		case '!ask':
			console.log("recieved ask");
			let attachment2 = new MessageAttachment('https://media.discordapp.net/attachments/399408989684891651/759183468008701993/image0-2.gif');
			msg.channel.send(attachment2);
			break;
		case '!cry':
			console.log("recieved cry");
			let attachment3 = new MessageAttachment('https://media1.tenor.com/images/9ac53890cf2c67689106faf8ec6559c6/tenor.gif?itemid=20298156');
			msg.channel.send(attachment3);
			break;
		case '!mge':
			console.log("recieved mge");
			let attachment4 = new MessageAttachment('https://images-ext-1.discordapp.net/external/Ss7n5GmKxAJFC7FQzRFO_a2baCZwp_EBLOILjcibrNY/https/media.discordapp.net/attachments/815275671873388568/817099991851204688/caption.gif');
			msg.channel.send(attachment4);
			break;
		case '!commands':
			console.log("recieved commands");
			msg.reply(' !saturday, !endrit, !anime, !ask, !cry, !mge, !div, !pfp, !invite')
			break;
		case '!invite':
			console.log("recieved invite");
			msg.reply('https://discordapp.com/oauth2/authorize?client_id=820709975579688987&scope=bot');
			break;
		}

	if (msg.content.startsWith('!div')) {
			console.log("recieved div");
		let user = msg.mentions.users.first();
		if (user) {
			msg.reply(user.tag + '\'s div is: ' + divisions[getRandomInt(4)]);
		}
		else {
			msg.reply('Your div is: ' + divisions[getRandomInt(4)]);
		}
	}

	if (msg.content.startsWith('!pfp')) {
		console.log("recieved saturday");
		let user1 = msg.mentions.users.first();
		if (user1) {
			msg.reply(user.tag + 'tounges my anus');
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
