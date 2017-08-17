var express = new require('express');
var bodyParser = new require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('stuff'));
/* //Naive approach to link style sheet
app.use('/assets',function(req,res,next){
  console.log(req.url);
  next();
});*/

app.get('/', function(req,res){
  res.render( 'index');
});

app.get('/contact', function(req,res){

  res.render( 'contact',{qs: req.query});
});

app.post('/contact', urlencodedParser,function(req,res){
  console.log(req.body);
  res.render( 'contact-success',{data: req.body});
});

app.get('/profile/:name', function(req,res){
  var data = {
    age: 24,
    job: 'Software Engineer',
    hobbies: ['social work','volunteer', 'travelling','music','cooking']
  };
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
