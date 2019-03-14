var express = require('express');
var router = express.Router();
const fs = require('fs');

const rawData = fs.readFileSync('./person.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cv', {person: JSON.parse(rawData)});
});

module.exports = router;
