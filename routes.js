const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/escape', (req, res) => {
  res.render('detail');
});

module.exports = router;
