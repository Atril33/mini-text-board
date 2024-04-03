const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toString().split(' ').slice(0, 4).join(' ')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toString().split(' ').slice(0, 4).join(' ')
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New'})
})

router.post('/new', (req, res) => {
  console.log(req.body)
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date().toString().split(' ').slice(0, 4).join(' ') });
  res.redirect('/');
})

module.exports = router;
