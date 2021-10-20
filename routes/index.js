var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "tacoCat"
  } );
});

module.exports = router;
router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
});







function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  if (checkSpace(phrase)===checkSpace(temp)){
    return true
  }
  else{
    return false
  }
}

function checkSpace(phrase) {
  phrase = (phrase.toLowerCase().replace("!", ""));
  phrase = (phrase.toLowerCase().replace("?", ""));
  phrase = (phrase.toLowerCase().replace(".", ""));
  phrase = (phrase.toLowerCase().replace(";", ""));
  phrase = (phrase.toLowerCase().replace(":", ""));
  phrase = (phrase.toLowerCase().replace("'", ""));
  phrase = (phrase.toLowerCase().replace(",", ""));
  return phrase
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}
function reverse(s){
  return s.split("").reverse().join("");
}