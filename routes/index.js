var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {
      title: 'API Client Server Scoping',
      newTitle: 'This is new title'
    }
  );
});

router.get('/skills', function(req, res, next) {
  res.render('skills',
    {
      title: 'Skills',
      newTitle: req.query.newtitle
    }
  );
});

router.get('/meals', function(req, res, next) {
  res.render('meals',
    {
      title: 'Meals',
    }
  );
});

// router.get('/skills', function(req, res, next) {
//   res.render('meals',
//     {
//       title: 'Skills',
//       newTitle: req.query.newtitle
//     }
//   );
// });
module.exports = router;
