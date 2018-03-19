require('dotenv').config()
const { RTMClient } = require('@slack/client');
var rtm = new RTMClient(process.env.SLACK_TOKEN);
rtm.start();

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C9QR594F8';

// The RTM client can send simple string messages
rtm.sendMessage('Hello there', conversationId)
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
