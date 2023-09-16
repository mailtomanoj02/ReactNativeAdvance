const admin = require('firebase-admin');
module.exports = function (req, res) {
  if (!req.body.phone || !req.body.code) {
    res.status(422).send({error: 'Phone or code is invalid'});
  }

  const phone = String(req.body?.phone).replace(/[^0-9]/g, '');
  const code = parseInt(req.body?.code);

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone);
      ref.on('value', snapshot => {
        ref.off();
        const user = snapshot.val();
        if (user.code !== code || !user.codeValid) {
          res.status(422).send({error: 'Invalid Code'});
        }
        ref.update({codeValid: false});
        admin
          .auth()
          .createCustomToken(phone)
          .then(token => {
            res.send({token: token});
          });
      });
    })
    .catch(err => {
      res.status(422).send({error: err});
    });
};
