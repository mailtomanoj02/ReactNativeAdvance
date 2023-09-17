const twilio = require('./twilio');
const code = '1234';
function test() {
  twilio.messages.create(
    {
      body: `Your code is : ${code}`,
      to: `8531896253`,
      from: '+14789794451',
    },
    (err) => {
      if (err) {
        return err;
      }
    },
  ).then(()=>console.log('success'));
}

console.log(test())
