var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    
    {
    id: "1",
    username: "Kovács Géza"
    }, 
    
    {
      id: "2",
      username: "Horváth István"
    }
]);
});

module.exports = router;
