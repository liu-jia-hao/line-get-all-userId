console.clear()
console.log('===============================================================')
const fetch = require('node-fetch');

fetch('https://api.line.me/v2/bot/followers/ids', {
  headers:
  {
    Authorization: 'Bearer NhtaLi5RCgxOPvin2MPclT2e08QbTB/IFY/8XhbvAZteVnLzyf7WmqqG8zi5IbMkSaA6TIOFwmRuZ7ik52BkDdPmFeE0+UNqcgxFSzn3Va6P7c09g3muWhq1mLtD0jLG3K0wCx/aR99Tsfb/cYQl4wdB04t89/1O/w1cDnyilFU='
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))