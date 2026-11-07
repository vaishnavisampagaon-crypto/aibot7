const {Telegraf}=require('telegraf')
const bot=new Telegraf(process.env.TOKEN)
bot.start((ctx)=>{ctx.reply('hi,IM a KLE Bot')});
//sending location
bot.command('location',(ctx)=>{ctx.replyWithLocation (15.3670,75.1200)})
bot.launch();
console.log("bot is started");