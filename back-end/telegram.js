const TelegramBot = require('node-telegram-bot-api');
const token = '5247714498:AAEpgjjDX8RnzodXbIURB_vr69gI1kbpAjk';

const bot = new TelegramBot(token, {polling: true});
const bot = new TelegramBot(token, {polling: true});

const dotenv = require("dotenv").config({ path: "./.env" });
const axios = require('axios')

//  const sendNotification = (text) => {
//     console.log( process.env.CHAT_ID)
//   let url =
//     "https://api.telegram.org/bot" +
//     process.env.TOKEN +
//     "/sendMessage?chat_id=" +
//     process.env.CHAT_ID +
//     "&text=" +
//     text;

//   axios.get(url).then(res => {
//     //console.log(`statusCode: ${res.status}`)
//     //console.log(res)
//   }).catch(error => {
//     console.error(error)
//   })

//   console.log("url: "+url);
// };

// module.exports = {sendNotification}


// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (text) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
