const fetch = require('node-fetch');
const sleep = require('./sleep')
require('dotenv').config()

module.exports = async function getUserID() {
  const res = await fetch('https://api.line.me/v2/bot/followers/ids', {
    headers:
    {
      Authorization: `Bearer ${process.env.private_channelAccessToken}`
    }
  })
  json = await res.json()
  console.log('sleep 1 sec')
  await sleep(1000)
  console.log('sleep 1 sec done')
  return json
}