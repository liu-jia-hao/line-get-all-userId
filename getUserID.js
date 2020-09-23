const fetch = require('node-fetch');
const sleep = require('./sleep')
require('dotenv').config()

module.exports = async function getUserID() {
  let next = null
  let allUserId = []
  while (1) {
    const startParam = next ? `?start=${next}` : ''
    let res
    try {
      res = await fetch(`https://api.line.me/v2/bot/followers/ids${startParam}`, {
        headers:
        {
          Authorization: `Bearer ${process.env.private_channelAccessToken}`
        }
      })
    } catch (err) {
      console.log(err)
    }
    const json = await res.json()
    allUserId = [...allUserId, ...json.userIds]
    if (!json.next) { // 假如下面沒有了，就結束
      return allUserId
    }
    next = json.next
    console.log('wait') // 怕被LINE伺服器封鎖所以睡一下
    await sleep(300)
  }
}