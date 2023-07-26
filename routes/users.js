var express = require('express');
var router = express.Router();

/* /users */
router.get('/register', (req,res) => res.render('users/register',{
  title : 'Registro'
}));
router.get('/login', (req,res) => res.render('users/login',{
  title : 'Login'
}));
router.get('/profile', (req,res) => res.render('users/profile',{
  title : 'Perfil'
}));

module.exports = router;
