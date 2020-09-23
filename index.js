console.clear()
console.log('===========================================================')
const getUserID = require('./getUserID')

const allUserIdArray = []

getUserID().then(json => console.log(json))
// while (1) {

// }


// fs.writeFile(filename, data, options, callback)