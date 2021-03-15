const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client();
var token = '';

var divisions = ['sub open', 'open', 'low', 'mid', 'high', 'prem'];
var mgeMemes = ['https://images-ext-1.discordapp.net/external/Ss7n5GmKxAJFC7FQzRFO_a2baCZwp_EBLOILjcibrNY/https/media.discordapp.net/attachments/815275671873388568/817099991851204688/caption.gif',
				'https://cdn.discordapp.com/attachments/813769928838479924/813839075689758720/Heres_your_image.gif',
				'https://cdn.discordapp.com/attachments/441256764185509938/814819824165191690/caption.gif',
				'https://media.discordapp.net/attachments/815275671873388568/815300418203680788/caption.gif']
var trollfaces = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Ftrollface-png-1.jpg&f=1&nofb=1',
				  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ff7_exYYvRu0%2Fmaxresdefault.jpg&f=1&nofb=1',
				  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2F93e6661ebc2648cc8aa46add5447a4ca%2Ftenor.gif&f=1&nofb=1']

var previousMgeMeme;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	function sendAttachment(_attachment) {
		let attachment = new MessageAttachment(_attachment);
		msg.channel.send(attachment);
	}

	switch(msg.content) {
		case '!saturday':
			console.log(Date() + "\nRecieved saturday " + msg.author + '\n');
			sendAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820429308694495272/image.png')
			break;
		case '!endrit':
			console.log(Date() + "\nRecieved endrit " + msg.author + '\n');
			sendAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820717045082619915/image.png');
			break;
		case '!anime':
			console.log(Date() + "\nRecieved anime " + msg.author + '\n');
			msg.reply('\nyea i watch anime\nfuck yo trollgang\nyou suck my dick\nthis is NOT tiktok homie\nthis aint tiktok blood\nu love me, i love you too\nu a troll, then u can get deez nuts\nu a troll, u can get deez balls in your mouf')
			break;
		case '!ask':
			console.log(Date() + "\nRecieved ask " + msg.author + '\n');
			sendAttachment('https://media.discordapp.net/attachments/399408989684891651/759183468008701993/image0-2.gif');
			break;
		case '!cry':
			console.log(Date() + "\nRecieved cry " + msg.author + '\n');
			sendAttachment('https://media1.tenor.com/images/9ac53890cf2c67689106faf8ec6559c6/tenor.gif?itemid=20298156');
			break;
		case '!mge':
			console.log(Date() + "\nRecieved mge " + msg.author + '\n');
			// let attachment4 = new MessageAttachment('https://images-ext-1.discordapp.net/external/Ss7n5GmKxAJFC7FQzRFO_a2baCZwp_EBLOILjcibrNY/https/media.discordapp.net/attachments/815275671873388568/817099991851204688/caption.gif');
			let randomNumber = getRandomInt(3);
			while (randomNumber === previousMgeMeme) {
				randomNumber = getRandomInt(3);
			}
			sendAttachment(mgeMemes[randomNumber]);
			previousMgeMeme = randomNumber;
			break;
		case '!invite':
			console.log(Date() + "\nRecieved invite " + msg.author);
			msg.reply('https://discordapp.com/oauth2/authorize?client_id=820709975579688987&scope=bot');
			break;
		case '!luka':
			console.log(Date() + "\nRecieved luka from " + msg.author + '\n');
			sendAttachment('https://media.discordapp.net/attachments/734367603455295543/814246234469564436/image0-2-1-1.gif');
			break;
		case '!makemake':
			console.log(Date() + "\nRecieved makemake from " + msg.author + '\n');
			sendAttachment('https://media.discordapp.net/attachments/540595344879124500/820256879312633866/Ponzi_Trader_-_Panic-1367218032486080515.mp4');
			break;
		case '!scouts':
			console.log(Date() + "\nRecieved scouts from " + msg.author + '\n');
			sendAttachment('https://media.discordapp.net/attachments/741961240938676248/782378642184994827/caption.gif');
			break;
		case '!sto':
			console.log(Date() + "\nRecieved sto from " + msg.author + '\n');
			sendAttachment('https://media1.tenor.com/images/7478f4908afecbbd6ac8025b8ea16f8c/tenor.gif?itemid=11796299');
			break;
		case '!troll':
			console.log(Date() + "\nRecieved troll from " + msg.author + '\n');
			sendAttachment(trollfaces[getRandomInt(2)]);
			break;
		case '!liltrolling':
			console.log(Date() + "\nRecieved liltroll from " + msg.author + '\n');
			sendAttachment('https://media.discordapp.net/attachments/784025029770870815/814247713842790410/ezgif-7-0cea1f099345.gif');
			break;
		case '!commands':
			console.log(Date() + "\nRecieved commands from " + msg.author + '\n');
			msg.reply(' !saturday, !endrit, !anime, !ask, !cry, !mge, !div, !pfp, !invite, !luka, !makemake, !sto, !troll, !liltrolling')
			break;
		}

	if (msg.content.startsWith('!div')) {
			console.log(Date() + "\nRecieved div from "+ msg.author + '\n');
		let user = msg.mentions.users.first();
		if (user) {
			msg.reply(user.tag + '\'s div is: ' + divisions[getRandomInt(5)]);
		}
		else {
			msg.reply('Your div is: ' + divisions[getRandomInt(5)]);
		}
	}

	if (msg.content.startsWith('!pfp')) {
		console.log(Date() + "\nRecieved pfp from " + msg.author + '\n');
		let user1 = msg.mentions.users.first();
		if (user1) {
			msg.reply(user.tag + 'tounges luka\'s anus');
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
