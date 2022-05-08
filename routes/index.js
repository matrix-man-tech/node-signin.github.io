let express = require('express');
const app = require('../app');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.header('Cache-control', 'no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  if (req.session.loggedIn) {
    res.redirect('/page')
  } else {
    res.render('index', { 'loginErr': req.session.loginErr });
    req.session.loginErr = false;
  }
});

const username = 'rahul'
const password = '1234'

router.post('/login', (req, res) => {
  res.header('Cache-control', 'no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  console.log(req.body)
  const user = req.body.username
  const pw = req.body.password
  console.log(user)

  if (user === username && pw === password) {
    req.session.loggedIn = true
    res.redirect('/page');
    console.log('success');
  } else {
    req.session.loginErr = true;
    res.redirect('/')
    console.log('Error')
  }
  res.end()
})
router.get('/Logout', (req, res) => {
  req.session.LoggedIn = false
  req.session.destroy()
  res.redirect('/')
  console.log('Logout');
});
module.exports = router;