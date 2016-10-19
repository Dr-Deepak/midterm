var express = require('express');
var router = express.Router();
var Movie = require('../model/movie');

router.get('/', function(req, res, next) {
//load movies from database
      Movie.find(
        function(err, movie){
          if (err) {
            console.log(err);
            rs.redirect('error');
          }else{
            res.render('Movies', {
                                  title: 'Movies',
                                  movies: movie
                                }
                      );
          }
        }
     );
  }
);

//to add new movie
router.get('/add', function(req, res, next) {
    res.render('addMovie', {
      title: 'Add new movie'
    });
});

module.exports = router;
