/***************************************************


                Made solely by Key


//**************************************************/


var Discord = require('discord.js');
var Tbot = new Discord.Client();


function isStudent(mContent){
    if (mContent.indexOf('i\'m a student') !== -1
    || mContent.indexOf('im a student') !== -1
    || mContent.indexOf('i am a student') !== -1
    || mContent.indexOf('i go to unf') !== -1) {
        return true;
    }else{return false;}
}

function isVisitor(mContent){
    if (mContent.indexOf('visitor') !== -1
    || mContent.indexOf('dont go to unf') !== -1
    || mContent.indexOf('don\'t go to unf') !== -1
    || mContent.indexOf('do not go to unf') !== -1) {
        return true;
    }else{return false;}
}

function isDnDPlayer(mContent){
    if (mContent.indexOf('d&d') !== -1
    || mContent.indexOf('dungeons and dragons') !== -1
    || mContent.indexOf('d and d') !== -1
    || mContent.indexOf('dungeons & dragons') !== -1) {
        return true;
    }else{return false;}
}

function isPUBGPlayer(mContent){
    if (mContent.indexOf('pubg') !== -1
    || mContent.indexOf('player unknowns battle grounds') !== -1
    || mContent.indexOf('player-unknowns battle grounds') !== -1
    || mContent.indexOf('player unknowns battlegrounds') !== -1) {
        return true;
    }else{return false;}
}

function isOWPlayer(mContent){
    if (mContent.indexOf('overwatch') !== -1
    || mContent.indexOf(' ow ') !== -1
    || mContent.indexOf(' ow.') !== -1
    || mContent.indexOf(' ow,') !== -1
    || mContent.endsWith(' ow')
    || mContent.startsWith('ow ')) {
        return true;
    }else{return false;}
}

function isCSGOPlayer(mContent){
    if (mContent.indexOf('counter strike') !== -1
    || mContent.indexOf('csgo') !== -1
    || mContent.indexOf(' cs ') !== -1
    || mContent.startsWith('cs ')
    || mContent.endsWith(' cs')) {
        return true;
    }else{return false;}
}

function isFightersPlayer(mContent){
    if (mContent.indexOf('smash') !== -1
    || mContent.indexOf('dbfz') !== -1
    || mContent.indexOf('dbz') !== -1
    || mContent.indexOf('fighters') !== -1) {
        return true;
    }else{return false;}
}

function isRLPlayer(mContent){
    if (mContent.indexOf('rocket league') !== -1
    || mContent.indexOf(' rl ') !== -1
    || mContent.indexOf(' rl.') !== -1
    || mContent.indexOf(' rl,') !== -1
    || mContent.startsWith('rl ')
    || mContent.endsWith(' rl')) {
        return true;
    }else{return false;}
}

function isHearthPlayer(mContent){
    if (mContent.indexOf('hearthstone') !== -1
    || mContent.indexOf(' hearth ') !== -1) {
        return true;
    }else{return false;}
}

function isMCPlayer(mContent){
    if (mContent.indexOf('minecraft') !== -1
    || mContent.indexOf(' mc ') !== -1
    || mContent.indexOf(' mc.') !== -1
    || mContent.indexOf(' mc,') !== -1
    || mContent.startsWith('mc ')
    || mContent.endsWith(' mc')) {
        return true;
    }else{return false;}
}

function isLoLPlayer(mContent){
    if (mContent.indexOf('league of legends') !== -1
    || mContent.indexOf(' lol ') !== -1
    || mContent.indexOf(' lol.') !== -1  //its gonna be rough to handle this
    || mContent.indexOf(' lol,') !== -1
    || mContent.startsWith('lol ')
    || mContent.endsWith(' lol')) {
        return true;
    }
    else if(mContent.indexOf('league') !== -1){
        if(mContent.indexOf('league') - mContent.indexOf('rocket') == mContent.indexOf('league') + 1){
            return true;
        }
    else{return false;}
    }
}

function isHOTSPlayer(mContent){
    if (mContent.indexOf('heroes of the storm') !== -1
    || mContent.indexOf(' hots ') !== -1
    || mContent.indexOf(' hots.') !== -1
    || mContent.indexOf(' hots,') !== -1
    || mContent.startsWith('hots ')
    || mContent.endsWith(' hots')
    || mContent.indexOf('heros of the storm') !== -1) {
        return true;
    }else{return false;}
}

function isFNPlayer(mContent){
    if (mContent.indexOf('fortnite') !== -1
    || mContent.indexOf(' fn ') !== -1
    || mContent.indexOf(' fn.') !== -1
    || mContent.indexOf(' fn,') !== -1
    || mContent.startsWith('fn ')
    || mContent.endsWith(' fn')) {
        return true;
    }else{return false;}
}

function isRS6Player(mContent){
    if (mContent.indexOf('siege') !== -1
    || mContent.indexOf('seige') !== -1
    || mContent.indexOf('rainbow') !== -1
    || mContent.indexOf(' r6 ') !== -1
    || mContent.indexOf(' r6.') !== -1
    || mContent.indexOf(' r6,') !== -1
    || mContent.startsWith('r6 ')
    || mContent.endsWith(' r6')) {
        return true;
    }else{return false;}
}

function addRole(m, roleName){
    try{
        m.member.addRoles(m.guild.roles.find(x => x.name == roleName).id);
        console.log('Added ' + roleName + ' role to member');
    }catch(err){
        console.log('Tried adding role to member. Resulted in error:\t'+ err);
    } 
}
/*
rand = Math.floor(Math.random()*3);

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*/



Tbot.on('ready', () =>{
    console.log('');
    console.log('Testbot up and ready');
    console.log('');

});

Tbot.on('message', message => {
    var msg = message.content.toLowerCase();

    if(message.channel == message.guild.channels.find(x => x.name == 'general-chat')){ 
        if (msg == 'big.'){message.channel.send('BIG');
        }else if(msg == 'huge.'){message.channel.send('**HUGE**');
        }else if(msg == 'large.'){message.channel.send('_***GINORMOUS***_');}
    }

    if(message.channel == message.guild.channels.find(x => x.name == 'game-check')){

        for(var i = 0; i < 14; i++){
            
            switch(i){
                case 0:if(isStudent(msg)){addRole(message, 'UNF Students');}else{console.log('No student tag found')}break;
                case 1:if(isVisitor(msg)){addRole(message, 'Visitors');}else{console.log('No visitor tag found')}break;
                case 2:if(isDnDPlayer(msg)){addRole(message, 'D&D');}else{console.log('No D&D tag found')}break;
                case 3:if(isPUBGPlayer(msg)){addRole(message, 'PUBG');}else{console.log('No PUBG tag found')}break;
                case 4:if(isOWPlayer(msg)){addRole(message, 'Overwatch');}else{console.log('No Overwatch tag found')}break;
                case 5:if(isCSGOPlayer(msg)){addRole(message, 'Counter Strike');}else{console.log('No CSGO tag found')}break;
                case 6:if(isFightersPlayer(msg)){addRole(message, 'Fighters');}else{console.log('No Fighters tag found')}break;
                case 7:if(isRLPlayer(msg)){addRole(message, 'Rocket League');}else{console.log('No RL tag found')}break;
                case 8:if(isHearthPlayer(msg)){addRole(message, 'Hearthstone');}else{console.log('No Hearth tag found')}break;
                case 9:if(isMCPlayer(msg)){addRole(message, 'Minecraft');}else{console.log('No MC tag found')}break;
                case 10:if(isLoLPlayer(msg)){addRole(message, 'League of Legends');}else{console.log('No LoL tag found')}break;
                case 11:if(isHOTSPlayer(msg)){addRole(message, 'Heroes of the Storm');}else{console.log('No HOTS tag found')}break;
                case 12:if(isFNPlayer(msg)){addRole(message, 'Fortnite');}else{console.log('No student Fortnite found')}break;
                case 13:if(isRS6Player(msg)){addRole(message, 'Rainbow 6 Siege');}else{console.log('No RS6 tag found')}break;
            }
        }
    }
});

Tbot.login('NDkzOTM2MDM5MzkyNDQ0NDE3.DosO0A.do_PrBn33krH01n3eE48Y0Lntgg').catch(console.error);