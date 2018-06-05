const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/escape', (req, res) => {
  res.render('escape');
});

router.get('/hotel', (req, res) => {
  res.render('hotel');
});

router.get('/manual', (req, res) => {
  res.render('manual');
});

router.get('/soma', (req, res) => {
  res.render('soma');
});

module.exports = router;
