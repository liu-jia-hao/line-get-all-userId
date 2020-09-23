const sleep = (miliSec) => new Promise((resolve, reject) => {
  setTimeout(resolve, miliSec)
})
module.exports = sleep