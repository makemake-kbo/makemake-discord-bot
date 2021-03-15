const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client();
var token = '';

var divisions = ['sub open','open', 'low', 'mid', 'high', 'prem'];
var mgeMemes = ['https://images-ext-1.discordapp.net/external/Ss7n5GmKxAJFC7FQzRFO_a2baCZwp_EBLOILjcibrNY/https/media.discordapp.net/attachments/815275671873388568/817099991851204688/caption.gif',
				'https://cdn.discordapp.com/attachments/760549057134329891/819686262315024394/add6vs15.mp4',
				'https://cdn.discordapp.com/attachments/813769928838479924/813839075689758720/Heres_your_image.gif',
				'https://cdn.discordapp.com/attachments/441256764185509938/814819824165191690/caption.gif',
				'https://media.discordapp.net/attachments/815275671873388568/815300418203680788/caption.gif']
var previousMgeMeme;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	switch(msg.content) {
		case '!saturday':
			console.log("recieved saturday " + msg.author);
			let attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820429308694495272/image.png');
			msg.channel.send(attachment);
			break;
		case '!endrit':
			console.log("recieved endrit " + msg.author);
			let attachment1 = new MessageAttachment('https://cdn.discordapp.com/attachments/760549057134329891/820717045082619915/image.png');
			msg.channel.send(attachment1);
			break;
		case '!anime':
			console.log("recieved anime " + msg.author);
			msg.reply('\nyea i watch anime\nfuck yo trollgang\nyou suck my dick\nthis is NOT tiktok homie\nthis aint tiktok blood\nu love me, i love you too\nu a troll, then u can get deez nuts\nu a troll, u can get deez balls in your mouf')
			break;
		case '!ask':
			console.log("recieved ask " + msg.author);
			let attachment2 = new MessageAttachment('https://media.discordapp.net/attachments/399408989684891651/759183468008701993/image0-2.gif');
			msg.channel.send(attachment2);
			break;
		case '!cry':
			console.log("recieved cry " + msg.author);
			let attachment3 = new MessageAttachment('https://media1.tenor.com/images/9ac53890cf2c67689106faf8ec6559c6/tenor.gif?itemid=20298156');
			msg.channel.send(attachment3);
			break;
		case '!mge':
			console.log("recieved mge " + msg.author);
			// let attachment4 = new MessageAttachment('https://images-ext-1.discordapp.net/external/Ss7n5GmKxAJFC7FQzRFO_a2baCZwp_EBLOILjcibrNY/https/media.discordapp.net/attachments/815275671873388568/817099991851204688/caption.gif');
			let randomNumber = getRandomInt(4);
			while (randomNumber === previousMgeMeme) {
				randomNumber = getRandomInt(4);
			}
			let attachment4 = new MessageAttachment(mgeMemes[randomNumber]);
			msg.channel.send(attachment4);
			previousMgeMeme = randomNumber;
			break;
		case '!invite':
			console.log("recieved invite " + msg.author);
			msg.reply('https://discordapp.com/oauth2/authorize?client_id=820709975579688987&scope=bot');
			break;
		case '!luka':
			console.log("recieved luka from " + msg.author);
			let attachment5 = new MessageAttachment('https://media.discordapp.net/attachments/734367603455295543/814246234469564436/image0-2-1-1.gif');
			msg.channel.send(attachment5);
			break;
		case '!makemake':
			console.log("recieved makemake from " + msg.author);
			let attachment6 = new MessageAttachment('https://media.discordapp.net/attachments/540595344879124500/820256879312633866/Ponzi_Trader_-_Panic-1367218032486080515.mp4');
			msg.channel.send(attachment6);
			break;
		case '!scouts':
			console.log("recieved scouts from " + msg.author);
			let attachment7 = new MessageAttachment('https://media.discordapp.net/attachments/741961240938676248/782378642184994827/caption.gif');
			msg.channel.send(attachment7);
			break;
		case '!sto':
			console.log("recieved sto from " + msg.author);
			let attachment8 = new MessageAttachment('https://media1.tenor.com/images/7478f4908afecbbd6ac8025b8ea16f8c/tenor.gif?itemid=11796299');
			msg.channel.send(attachment8);
			break;
		case '!commands':
			console.log("recieved commands from " + msg.author);
			msg.reply(' !saturday, !endrit, !anime, !ask, !cry, !mge, !div, !pfp, !invite, !luka, !makemake, !sto')
			break;
		}

	if (msg.content.startsWith('!div')) {
			console.log("recieved div from "+ msg.author);
		let user = msg.mentions.users.first();
		if (user) {
			msg.reply(user.tag + '\'s div is: ' + divisions[getRandomInt(4)]);
		}
		else {
			msg.reply('Your div is: ' + divisions[getRandomInt(4)]);
		}
	}

	if (msg.content.startsWith('!pfp')) {
		console.log("recieved pfp from " + msg.author);
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
