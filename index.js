console.clear()
console.log('===========================================================')
const getUserID = require('./getUserID')
const fs = require('fs')


getUserID().then(allUid =>
  fs.writeFile('userIds.json', JSON.stringify(allUid), (err) => {
    if (err) throw err;
  })
)


// fs.writeFile(filename, data, options, callback)