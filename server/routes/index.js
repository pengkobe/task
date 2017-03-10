var express = require('express');
var app = express.Router();


app.get('/', function (req, res) {
  res.render('index', {
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
});

function checkLogin(req, res, next) {
  if (!req.session.user) {
    req.flash('error', '未登录!');
    res.redirect('/login');
    return;
  }
  next();
}

function checkNotLogin(req, res, next) {
  if (req.session.user) {
    req.flash('error', '已登录!');
    res.redirect('back');//返回之前的页面
    return;
  }
  next();
}

module.exports = app;
