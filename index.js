/******************
To Run:     . node
To Stop:    ctrl c

Call it CinnamonRoleBot
Give it a command to list facts about cinnamon rolls (just google it)
Give it a command to link lmgtfy when you ask it a question

rand = Math.floor(Math.random()*3);
//*****************/

var Discord = require('discord.js');
var Tbot = new Discord.Client();

Tbot.on('ready', () =>{
    console.log('');
    console.log('Testbot up and ready');
    console.log('');

});

Tbot.on('message', message => {     //respond to any message anywhere
    var msg = message.content.toLowerCase();
    
    if(message.channel == message.guild.channels.find(x => x.name == 'game-check')){
        if (msg.indexOf('i\'m a student') !== -1
        || msg.indexOf('im a student') !== -1
        || msg.indexOf('i go to unf') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'unf Students').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('visitor') !== -1
        || msg.indexOf('dont go to unf') !== -1
        || msg.indexOf('don\'t go to unf') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Visitor').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('d&d') !== -1
        || msg.indexOf('dungeons and dragons') !== -1
        || msg.indexOf('d and d') !== -1
        || msg.indexOf('dungeons & dragons') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'D&D').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('pubg') !== -1
        || msg.indexOf('player unknowns battle grounds') !== -1
        || msg.indexOf('player-unknowns battle grounds') !== -1
        || msg.indexOf('player unknowns battlegrounds') !== -1) {
            try{
             message.member.addRoles(message.guild.roles.find(x => x.name == 'PUBG').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('overwatch') !== -1
        || msg.indexOf(' ow ') !== -1
        || msg.indexOf(' ow.') !== -1
        || msg.indexOf(' ow,') !== -1
        || msg.endsWith(' ow')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Overwatch').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('counter strike') !== -1
        || msg.indexOf('csgo') !== -1
        || msg.indexOf(' cs ') !== -1
        || msg.endsWith(' cs')){
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Counter Strike').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('smash') !== -1
        || msg.indexOf('dbfz') !== -1
        || msg.indexOf('dbz') !== -1
        || msg.indexOf('fighters') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Fighters').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('rocket league') !== -1
        || msg.indexOf(' rl ') !== -1
        || msg.indexOf(' rl.') !== -1
        || msg.indexOf(' rl,') !== -1
        || msg.endsWith(' rl')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Rocket League').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('hearthstone') !== -1
        || msg.indexOf(' hearth ') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Hearthstone').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('minecraft') !== -1
        || msg.indexOf(' mc ') !== -1
        || msg.indexOf(' mc.') !== -1
        || msg.indexOf(' mc,') !== -1
        || msg.endsWith(' ow')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Minecraft').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }
 /****************************************Start of League*********************************************** */       
        if (msg.indexOf('league of legends') !== -1
        || msg.indexOf(' lol ') !== -1
        || msg.indexOf(' lol.') !== -1  //its gonna be rough to handle this
        || msg.indexOf(' lol,') !== -1
        || msg.endsWith(' lol')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'League of Legends').id).then(console.log('added league role to member at ' + new Date().toLocaleTimeString()));
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }else if(msg.indexOf('league') !== -1){
            if(msg.indexOf('league') - msg.indexOf('rocket') == msg.indexOf('league') + 1){
                try{
                    message.member.addRoles(message.guild.roles.find(x => x.name == 'League of Legends').id);
                }catch(err){
                    console.log('Member already had league role. Error:\t'+ err);
                }
            }
        }
/****************************************End of League*********************************************** */
        if (msg.indexOf('heroes of the storm') !== -1
        || msg.indexOf(' hots ') !== -1
        || msg.indexOf(' hots.') !== -1
        || msg.indexOf(' hots,') !== -1
        || msg.endsWith(' hots')
        || msg.indexOf('heros of the storm') !== -1) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Heroes of the Storm').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('fortnite') !== -1
        || msg.indexOf(' fn ') !== -1
        || msg.indexOf(' fn.') !== -1
        || msg.indexOf(' fn,') !== -1
        || msg.endsWith(' fn')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Fortnite').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }if (msg.indexOf('siege') !== -1
        || msg.indexOf('seige') !== -1
        || msg.indexOf('rainbow') !== -1
        || msg.indexOf(' r6 ') !== -1
        || msg.indexOf(' r6.') !== -1
        || msg.indexOf(' r6,') !== -1
        || msg.endsWith(' r6')) {
            try{
                message.member.addRoles(message.guild.roles.find(x => x.name == 'Rainbow 6 Siege').id);
            }catch(err){
                console.log('Tried adding role to member that already has that role. Error:\t'+ err);
            }
        }
    } 



    if (msg == 'big.'){message.channel.send('BIG');
    }else if(msg == 'huge.'){message.channel.send('**HUGE**');
    }else if(msg == 'large.'){message.channel.send('_***GINORMOUS***_')}
});

Tbot.login('NDkzOTM2MDM5MzkyNDQ0NDE3.DosO0A.do_PrBn33krH01n3eE48Y0Lntgg').catch(console.error);