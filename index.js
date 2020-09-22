const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'NhtaLi5RCgxOPvin2MPclT2e08QbTB/IFY/8XhbvAZteVnLzyf7WmqqG8zi5IbMkSaA6TIOFwmRuZ7ik52BkDdPmFeE0+UNqcgxFSzn3Va6P7c09g3muWhq1mLtD0jLG3K0wCx/aR99Tsfb/cYQl4wdB04t89/1O/w1cDnyilFU='
});

client.getGroupMemberIds('<groupId>')
  .then((ids) => {
    ids.forEach((id) => console.log(id));
  })
  .catch((err) => {
    // error handling
  });