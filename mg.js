const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://apbot.glitch.me/`);
}, 280000);
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const botversion = require('./package.json').version;
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const hastebins = require('hastebin-gen');
const pretty = require("pretty-ms");
const cd = require('countdown');
const totime = require('to-time');
const Enmap = require('enmap');
const dbg = new Enmap({ name: 'Giveaway' });
client.login(process.env.MG_TOKEN);
const queue = new Map();
var table = require('table').table
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////[ STATUS ]////
client.on('ready', () => {
 client.user.setStatus("online")
});
client.on('ready', () => {
     client.user.setActivity("$help",{type: 'playing'});
 
});



//help
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    message.channel.send(`                      
<a:600958738127650816:759382983173341215>-| Help Menu.
----------------------------------
<a:8888:759379685875384360>-| $Public ⇏ __قائمة الاوامر العامة__
<a:9999:759379701432057866>-| $Admin ⇏ __قائمة اوامر الادمن__
<a:600958726068895755:759379728833970196>-| $Music ⇏ __قائمة اوامر الموسيقي__
<a:7777:759379717375393832>-| $Tickets ⇏ __قائمة اوامر التيكت__
<a:sr:760123528040808478>-| $Games ⇏ __لعرض اوامر الالعاب__
<a:pl:760157104681779261>-| $Protection ⇏ __اوامر حماية السيرفرات__
<a:Giveaway2:763564249867223040>-| $Giveaway ⇏ __اوامر الجيف اواي__
----------------------------------
   `);
  }
});






client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Public") {
    message.channel.send(`
-| General commands.
----------------------------------
<a:0009:759382993445060640>-| **$ping** ⇏ __لمعرفة سرعة اتصال البوت__
<a:0009:759382993445060640>-| **$gRole <Rolename>** ⇏ __يوريك معلومات رتبة باسمها او الايدي حقها__
<a:0009:759382993445060640>-| **$bot** ⇏ __يعرض لك كل معلومات البوت__
<a:0009:759382993445060640>-| **$say** ⇏ __يكرر الكلام الي تكتبو__
<a:0009:759382993445060640>-| **$savatar** ⇏ __صورة السيرفر__
<a:0009:759382993445060640>-| **$id** ⇏ __معلومات عنك__
<a:0009:759382993445060640>-| **$avt** ⇏ __صورتك او صورة الي تحط الأيدي بتاعه__
<a:0009:759382993445060640>-| **$inv** ⇏ __لأخذ رابط البوت__
<a:0009:759382993445060640>-| Server bot ⇏ https://discord.gg/h6yYdV9
----------------------------------
   `);
  }
});




client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Music") {
    message.channel.send(`
<a:ms:759815116446236672>-| Music commands.
----------------------------------
<a:600958726068895755:759379728833970196>-| **$Play** ⇏ __تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]__
<a:600958726068895755:759379728833970196>-| **$Pause** ⇏ __ايقاف مؤقت الاغنية__
<a:600958726068895755:759379728833970196>-| **$Resume** ⇏ __اكمال الاغنية__ 
<a:600958726068895755:759379728833970196>-| **$stop** ⇏ __لأيقاف الأغنية وخروج البوت من الروم__
<a:600958726068895755:759379728833970196>-| **$forceskip** ⇏ __لتخطي الأغنية بشكل مباشر__
<a:600958726068895755:759379728833970196>-| **$Queue** ⇏ __عرض القائمة__ 
<a:600958726068895755:759379728833970196>-| **$skipto** ⇏ __لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة__
<a:600958726068895755:759379728833970196>-| **$Skip** ⇏ __تخطي للاغنية التالية__
<a:600958726068895755:759379728833970196>-| **$Volume** ⇏ __تغيير الصوت [vol]__
<a:600958726068895755:759379728833970196>-| **$repeat** =⇏ __تكرار الاغنية__
----------------------------------
   `);
  }
});



client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Admin") {
    message.channel.send(`
<a:9999:759379701432057866>-| Admin commands.
----------------------------------
<a:sh:759921991054000148>-| **$schannel** ⇏ __اضهار الشات المخفية__
<a:sh:759921991054000148>-| **$hchannel** ⇏ __اخفاء الشات__
<a:sh:759921991054000148>-| **$talk** ⇏ __للتكلم بصفة البوت في روم معين__
<a:sh:759921991054000148>-| **$server** ⇏ __يعرض لك معلومات عن السيرفر__
<a:sh:759921991054000148>-| **$sug** ⇏ __لصنع اقتراح لازم روم اسمها suggestions__
<a:sh:759921991054000148>-| **$allbots** ⇏ __يوريك كل البوتات في سيرفرك__
<a:sh:759921991054000148>-| **$مسح** / **$clear** ⇏ __لمسح الشات__
<a:sh:759921991054000148>-| **$mute @user <reason>** ⇏ __اعطاء العضو ميوت لازم رتبة وكمان متنساش تخلي الرتبة مينفعش تتكلم في الشات <Muted>__
<a:sh:759921991054000148>-| **$unmute @user** ⇏ __لفك الميوت عن الشخص__ 
<a:sh:759921991054000148>-| **$kick @user <reason>** ⇏ __طرد الشخص من السيرفر__
<a:sh:759921991054000148>-| **$ban @user <reason>** ⇏ __حضر الشخص من السيرفر__
<a:sh:759921991054000148>-| **$unban ID** ⇏ __لفك حضر الشخص من السيرفر__
<a:sh:759921991054000148>-| **$قفل** / **$close** ⇏ __تقفيل الشات__
<a:sh:759921991054000148>-| **$فتح** / **$open** ⇏ __فتح الشات__
<a:sh:759921991054000148>-| **$warn @user <reason>** ⇏ __لتحذير احد__
<a:sh:759921991054000148>-| **$warnings** ⇏ __الأظهار كل التحذيرات__
<a:sh:759921991054000148>-| **$removewarn** / **$rmv** ⇏ __لأزالة تحذير__
<a:sh:759921991054000148>-| **$setlog** ⇏ __لعمل روم اللوق__
<a:sh:759921991054000148>-| **$setlog** ⇏ __لعمل روم اللوق__
----------------------------------
   `);
  }
});




client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Tickets") {
    message.channel.send(`
<a:7777:759379717375393832>-| Ticket list.
----------------------------------
<a:ti:760112703259541545>-| **$tic** ⇏ __لفتح تكت__
<a:ti:760112703259541545>-| **$اغلاق** / **$Close tic** ⇏ __لأغلاق التكت__
----------------------------------
   `);
  }
});




client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Games") {
    message.channel.send(`
<a:9999:759379701432057866>-| Games commands.
----------------------------------
<a:XO:760486390491643904>-| **$xo** ⇏ __game xo__
<a:Hack:760488862795038720>-| **$hack** ⇏ __game hack__
<a:kill:760490312404566020>-| **$kill** ⇏ __game kill__
----------------------------------
   `);
  }
});




client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Protection") {
    message.channel.send(`
<a:pl:760157104681779261>-| Protection commands.
----------------------------------
<a:Protection:760157956020109312>-| **$settings limitsban <number>** ⇏ __تحدد العدد الي تبيه لو حد بند  بيشتال رتبته__
<a:Protection:760157956020109312>-| **$settings limitskick <number>** ⇏ __تحدد العدد الي تبيه لو حد طرد 3 او 4 بيشتال رتبته__
<a:Protection:760157956020109312>-| **$settings limitsroleD <number>** ⇏ __تحدد العدد الي تبيه لو حد مسح رول 3 او 4 بيشتال رتبته__
<a:Protection:760157956020109312>-| **$settings limitsroleC <number>** ⇏ __تحدد العدد الي تبيه لو حد صنع رول 3 او 4 بيشتال رتبته__
<a:Protection:760157956020109312>-| **$settings limitschannelD <number>** ⇏ __تحدد العدد الي تبيه لو حد مسح روم 3 او 4 بيشتال رتبته__
<a:Protection:760157956020109312>-| **$settings limitstime <number>** ⇏ __تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة تنزل رتبتة__
<a:Protection:760157956020109312>-| **$antibots on** ⇏ __منع دخول بوتات__
<a:Protection:760157956020109312>-| **$antibots off** ⇏ __فتح دخول البوتات__
----------------------------------
   `);
  }
});




client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Giveaway") {
    message.channel.send(`                      
<a:Giveaway2:763564249867223040>-| Giveaway Menu.
----------------------------------
<a:Giveaway:763564262466519081>-| **$create <time> <winners> <prize>** ⇏ __عمل جيف اواي__
<a:Giveaway:763564262466519081>-| **$end + Message Id** ⇏ __لانهاء جيف اواي بدون تحديد الفائز__
<a:Giveaway:763564262466519081>-| **$reroll + Message Id** ⇏ __لاختيار شخص اخر للفوز ب الجيف اواي__
----------------------------------
   `);
  }
});





////ping
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content == prefix + "ping") {
 message.channel.send('› pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\n› Time taken: ${PinG} ms.\n› Discord API: ${ApL} ms.\`\`\``);
 })
  }  
 });





//moveall
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });











//اختصار الروابط
const shorten = require('isgd');
client.on('message', message => {
 if (message.content.startsWith(prefix + 'short')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**استعمل**: '+ prefix +'short <رابط>')
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**${res}**`);
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`);
      message.channel.send(`اختصار الرابط:**${res}**`);
})
}}
});







//clear
client.on("message", message => {
  if (message.author.bot) return; ///Pixel Team
  if (message.content.startsWith("$clear")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.** `)
          .then(messages => messages.delete(5000));
      });
  }
});



client.on("message", message => {
  if (message.author.bot) return; ///Pixel Team
  if (message.content.startsWith("$مسح")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.** `)
          .then(messages => messages.delete(5000));
      });
  }
});


















// ------------ = [Colors] = ------------ //
 
client.on("message", message => {
      if (!message.guild || message.author.bot) return;
        if (message.content == "$colors" || message.content == "الوان") {
          var fsn = require('fs-nextra');
          fs.readdir('./colors', async (err, files) => {
              var f = files[Math.floor(Math.random() * files.length)];
              var {
                  Canvas
              } = require('canvas-constructor');
              var x = 0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                  x += 100;
                  if (x > 100 * 12) {
                      x = 100;
                      y += 80;
                  }
              });
              var image = await fsn.readFile(`./colors/${f}`);
              var xd = new Canvas(100 * 11, y + 350)
                  .addBeveledImage(image, 0, 0, 100 * 11, y + 260, 25)
                  .setTextBaseline('middle')
                  .setColor('black')
                  .setTextSize(80)
                  .addText(`Color List`, 375, 75);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                  x += 75;
                  if (x > 100 * 10) {
                      x = 75;
                      y += 80;
                  }
                  xd
                      .setTextBaseline('middle')
                      .setTextAlign('center')
                      .setColor(role.hexColor)
                      .addBeveledRect(x, y, 60, 60, 15)
                      .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x + 30, y + 30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
      }
  })
 



 // ------------ = [select   Colors] = ------------ //
 
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  if(message.content.split(' ')[0] == prefix+'color' || message.content.split(' ')[0] == 'لون'){
  const embedd = new Discord.RichEmbed()
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:x30:714394016883540031> **-** **No Color With This Name/Number **`)
  .setColor(`ff0000`)
 
  if(!isNaN(args) && args.length > 0)
 
 
  if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
  var a = message.guild.roles.find("name",`${args}`)
   if(!a)return;
  const embed = new Discord.RichEmbed()
 
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:x13:712913365508292610> **-** **Done Give You This Color**`)
 
  .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
  if (!args)return;
  setInterval(function(){})
     let count = 0;
     let ecount = 0;
  for(let x = 1; x < 201; x++){
 
  message.member.removeRole(message.guild.roles.find("name",`${x}`))
 
  }
   message.member.addRole(message.guild.roles.find("name",`${args}`));
 
 
  }
  });
 


//ban
client.on("message", message => {
  if (message.content.split(" ")[0] == `$ban`) {
    if (!message.guild || message.author.bot) return undefined;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You don't have permission.");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel.send("I don't have permission.");
    let args = message.content.split(" ").slice(1);
    let user =
      message.guild.members.get(message.content.split(" ")[1]) ||
      message.mentions.members.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!user)
      return message.channel.send(`Usage: ${prefix}ban @mention reason`);
    if (!reason) reason = "No reason provided.";
    if (user.user.id === message.author.id)
      return message.channel.send("You can't ban yourself!");
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `I can't ban **${user.user.tag}** because his role highest than my role!`
      );
    if (!message.guild.member(user.user).bannable)
      return message.channel.send(`I can't ban **${user.user.tag}**.`);
    message.guild.member(user).ban(reason, user);
    message.channel.send(
      `Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``
    );
  }
});



//////////unban
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});








////kick


 





////leave
        client.on('message', message=>{  
    if(message.author.bot) return;  
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setleave')) {  
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let leave = message.guild.channels.find("name", "✋leave✋")  
    if(leave) return message.reply("**يوجد  روم بالفعل**")   
    if(!leave) {   
    message.guild.createChannel("✋leave✋", "text").then(c=> {  
        c.overwritePermissions(message.guild.id, {  
            SEND_MESSAGES: false
    })
})
message.channel.send("**✅ ,تم انشاء روم المغادرين**")
    }
    }  
     })



//brodacst
client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('$bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "ScrpitBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bk')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rbc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rbc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });


//avatarserver
client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "savatar"){
          const embed = new Discord.RichEmbed()
  
      .setTitle(`ServerAvatar${message.guild.name}  `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



















/////كود انفايت




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
:rose:  **ولكم نورت السيرفر**:rose: 
:zap:**انت العضو رقم** ${member.guild.memberCount} :zap:
:crown:**${member}**:crown:`) 
}).catch(console.error)
})



//cr لصنع رتب الوان
client.on('message', msg => {
                        let args = msg.content.split(" ").slice(1).join(" ")
if (msg.content.split(" ")[0].toLowerCase() === "$cr") {
    if(!args) return msg.channel.send('`الرجاء كتابة عدد اللوان المرجى صنعها`');
             if (!msg.member.hasPermission('MANAGE_ROLES')) return;
              msg.channel.send(`** Done Colors Was Successful Created ${args}**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            msg.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
});



//قفل وفتح الشات
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**تم قفل الشات :no_entry: **");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**تم فتح الشات :white_check_mark:**");
      });
  }
});



client.on("message", message => {
  if (message.content === prefix + "قفل") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**:lock: has been locked.**");
      });
  }
  if (message.content === prefix + "فتح") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**:unlock: has been unlocked.**");
      });
  }
});



//send
const perfix = '$';
client.on('message', msg => {
   if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});














//اكواد حماية
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (message.author.id !== message.guild.owner.user.id) return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) { 
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    } 
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})

client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
  if (codes.content.startsWith(prefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("** AntiBots Join Is On :lock: **");
  }
  if (codes.content.startsWith(prefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("** AntiBots Join Is Off :unlock: **");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});





//xo
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`جرب $xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });




//say
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );

    message.channel.send("" + args.join("  "));
    message.delete();
  }
});



//talk
client.on('message',message =>   {
  if(message.channel.type == 'dm') return;
  if(message.content.startsWith(prefix + "talk")) {
      var attentions = {};
      attentions[message.guild.id] = { };
      message.channel.send( message.author + ', **Wait , PuP System**').then( (m) =>{
      m.edit( message.author + ', **أرسل أيدي الروم**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 600000 } ).then ( (m1) => {
      m1 = m1.first();
      attentions[message.guild.id]['id'] = m1.content;
      m1.delete();
m1 = message.guild.channels.get(`${attentions[message.guild.id]['id']}`)
if(!m1) return message.reply(`**الأيدي هذا غير صحيح \`${attentions[message.guild.id]['id']}\`**`);
 
      m.edit(message.author+"**,  يرجى كتابة رسالة معينة **")
      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 600000 }).then ( (m2) => {
      m2 = m2.first();
      attentions[message.guild.id]['msg'] = m2.content;
      m2.delete();
      m.delete();
      message.channel.send(`**هل تريد إرسال في روم <#${attentions[message.guild.id]['id']}>
${attentions[message.guild.id]['msg']}**`).then(msge => {
      msge.react('✅').then( r => {
      msge.react('❌')
      const oneFilterBB = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      const threeFilterBB = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const oneBY = msge.createReactionCollector(oneFilterBB, {maxMatches : 1,time : 400000,});
      const threeBY = msge.createReactionCollector(threeFilterBB, {maxMatches : 1,time : 400000,});
      oneBY.on('collect', r => {
      msge.delete();
      message.guild.channels.get(`${attentions[message.guild.id]['id']}`).send(`${attentions[message.guild.id]['msg']}`)
      }).catch(RebeL =>{ console.log('`Error`: ' + RebeL)});
          threeBY.on('collect', r => {
      msge.delete();
      })
      })
  })
      });
      });
      });
     
    }
    });














////تقديم

client.on("message", message => {
  if (message.content == prefix + "submit") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find("name", "تـقـديـم");
    if (!channel)
      return message.reply(
        "<a:x30:714394016883540031> | **Type [ -room 1 ] To Make Room Submit.**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسـمــك  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **عــمــرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **تـسـاعـدنـا بأيــة 🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هـتـحـتـرم الـقـوانـيـن 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **أقسـم انـي مـا أبـوظ سـمـعـة الـسـيـرفـر أبـدا 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **... جـاري جـمـع الـبـيـانـات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**New Submit.** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`الـمـسـاعـدة`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`احـتـرام الـقـوانـيـن`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`الـقـسـم`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  message.author.username,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content == prefix + "room 1") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:x30:714394016883540031> | **You Don't Have Permission.**");
    message.guild.createChannel("تـقـديـم", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:x13:712913365508292610> | **تـم انـشـاء روم تـقـديـم**");
  }
});
client.on("message", async message => {
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.find("name", role);
  if (message.content == prefix + "apply") {
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom)
      return message.reply(
        "<a:x30:714394016883540031> | **Type [ -room 2 ] To Make Room Reject or Apply.**"
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("<a:x30:714394016883540031> | مـنـشـن الـعـضـو");
      if (!role) return message.reply("<a:x30:714394016883540031> | أدخـل اسـم رتـبـة");
      if (!mySupport) return message.reply("<a:x30:714394016883540031> | لـم أجـد هذة الـرتـبـة");
      if (mention.roles.has(mySupport))
        return message.reply("<a:x13:712913365508292610> | **هـذا الـشـخـص يـمـلـك الـرتـبـة**");

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطـاءك رتـبـة ${mention} تـم قـبـولـك  <a:x13:712913365508292610>**`
        );
      });
    }
  }
});

client.on("message", async message => {
  let mention = message.mentions.members.first();
  if (message.content == prefix + "reject") {
    if (!message.channel.guild) return;
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom) return message.reply("<a:x30:714394016883540031> | **Type [ -room 1 ] To Make Room Submit.**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("<a:x30:714394016883540031> | مـنـشـن الـعـضـو");

    acRoom.send(`<a:x13:712913365508292610> | **${mention} تـم رفـضـك للأسـف**`);
  }
});
client.on("message", message => {
  if (message.content == prefix + "room2") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:x30:714394016883540031> | **You Don't Have Permission.**");
    message.guild.createChannel("قـبـول-رفـض", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:x13:712913365508292610> | **تـم انـشـاء روم الـقـبـول-الـرفـض**");
  }
});


/////
///// [      1      ] ////
client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'hl')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

//// [    2   ] ////
var spee={};
var fox="%";
let pointsfox= {}
const foxt = [
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055751447773195/bandicam_2019-07-16_14-38-25-841.jpg",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055755080302593/bandicam_2019-07-17_17-14-28-589.jpg",
        "answers": ["بلجيكا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055760180576276/bandicam_2019-07-17_17-15-04-686.jpg",
        "answers": ["فرنسا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055761467965452/bandicam_2019-07-17_17-15-42-926.jpg",
        "answers": ["كرواتيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055764542390287/bandicam_2019-07-17_17-16-28-291.jpg",
        "answers": ["برتغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055766576889863/bandicam_2019-07-17_17-16-42-901.jpg",
        "answers": ["سنغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055769399525394/bandicam_2019-07-17_17-16-57-102.jpg",
        "answers": ["سعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055772377350165/bandicam_2019-07-17_17-17-17-663.jpg",
        "answers": ["المانيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773421862913/bandicam_2019-07-17_17-17-37-828.jpg",
        "answers": ["المكسيك"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773761732619/bandicam_2019-07-17_17-17-52-326.jpg",
        "answers": ["ارغواي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055830451683359/bandicam_2019-07-17_17-18-00-272.jpg",
        "answers": ["صربيا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055832704155658/bandicam_2019-07-17_17-18-20-074.jpg",
        "answers": ["مصر"]
       
    }
];
 






//كود كريديت
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const Galers = require('./Galers.json');
  const path = './Galers.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!Galers[author]) Galers[author] = {Galers: 50};
  if(!Galers[mention.id]) Galers[mention.id] = {Galers: 50};
  fs.writeFile(path, JSON.stringify(Galers, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "Galer")) {
  if(args[0] !== `${prefix}Galer` && args[0] !== `${prefix}Galers`) return;

  if(args[2]) {
	if(isNaN(args[2]) || args[2] < 0) return message.channel.send(' هذه الخانة يجب ان تتكون من ارقام صحيحة وليس احرف.');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(Galers[author].Galers < balance) return message.channel.send('**:heavy_multiplication_x:| You Dont Have That Much Galer.**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          Galers[author].Galers += (-balance);
          Galers[mention.id].Galers += (+balance);
          fs.writeFile(path, JSON.stringify(Galers, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your <a:Galercard:761320579532849181> balance is **${Galers[mention.id].Galers}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            Galers[mentionn.id].Galers += (+daily);
            fs.writeFile(path, JSON.stringify(Galers, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      Galers[author].Galers += (+daily);
      fs.writeFile(path, JSON.stringify(Galers, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
}); 
 








//inv
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "inv") {
    message.channel.send(`                      
تفضل رابط البوت <a:603943432469348362:762406606637105184>
<https://discord.com/api/oauth2/authorize?client_id=754368937738633217&permissions=8&scope=bot>
   `);
  }
});






