require('dotenv').config()
const { RTMClient } = require('@slack/client');
// const { CLIENT_EVENTS } = require('@slack/client');
// // var RtmClient = require('@slack/client').RtmClient;
// var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
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


// let channel;
// rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
//   for (const c of rtmStartData.channels) {
//       if (c.is_member && c.name ==='test-shared-config') { channel = c.id }
//   }
//   console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
// });
// rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
//   rtm.sendMessage("Hello!", channel);
// });
