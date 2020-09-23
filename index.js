console.clear()
console.log('===========================================================')
const fetch = require('node-fetch');
require('dotenv').config()
const allUserIdArray = []
// while (1) {

// }

fetch('https://api.line.me/v2/bot/followers/ids', {
  headers:
  {
    Authorization: `Bearer ${process.env.private_channelAccessToken}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
  .then(() => { })
  .catch(err => console.log(err))
// fs.writeFile(filename, data, options, callback)