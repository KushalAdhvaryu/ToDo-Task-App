

/* Example 24
Route parameters in express
how to handle dynamic request?
we can do it using route parameters.
req.params.

*/
var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('this is the homepage');
});

app.get('/contact', function(req,res){
	res.send('this is the contact page');
});

app.get('/profile/:id', function(req,res){
	res.send('You requested to see profile with the id of ' + req.params.id);
});

app.listen(3000);




/*
Example 23
Intro to express
Easy flexible routing
Integrates with templating engines
contains middleware framework

Express is module written in JS which can be used in our app.

*/
var express = require('express');
var app = express();
//we fire express function using var app.
//express evaluates content type.
app.get('/', function(req,res){
	res.send('this is the homepage');
});

app.get('/contact', function(req,res){
	res.send('this is the contact page');
});

app.listen(3000);
// we make http verbs request.

Get - app.get('route',fn)
post - app.post('route',fn)
delete - app.delete('route',fn)


/*Example 22
installing nodemon.
monitor application files, when run in browser change application
call file, monitor file and restart server itself.

nom install -g nodemon
g means installs globally.

*/

/* Example 21
package.json
npm init
keep track of packages. for that we need to pass save flag
later when app is passed , just run npm install
node looks for all dependencies .
*/

/*
Example  20
npm install {package}
npm install {package}



*/
// Exmaple19
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log('Request was made:' + req.url);
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('feed me popcorn');
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if(req.url === '/api/ninjas'){
		var ninjas = [{name:'kushal', age: 23}, {name:'mruga', age:26}];
		res.writeHead(200,{'Content-Type': 'application/json'});
		res.end(JSON.stringify(ninjas));
	} else {
		res.writeHead(404,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000,'127.0.0.1');
console.log('Yo! now listening to port 3000');

//Example 18 Serving JSON to client

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	console.log('request was made:' + req.url);

	res.writeHead(200,{'Content-Type': 'application/json'});
	var myObj = {
		name: 'Kushal',
		job: 'Student',
		age: 23
	};
	// end method expects string or buffer.
	res.end(JSON.stringify(myObj));

});
server.listen(3000);
console.log('Now listening to port 3000');


// Example 17 Serving HTML pages

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	console.log('request was made:' + req.url);

	res.writeHead(200,{'Content-Type': 'text/html'});
	var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
	readStream.pipe(res);
});
server.listen(3000);
console.log('Now listening to port 3000');

// Example 14 Readable streams.
//Example 15 Writeable stream.
//Example 16 pipes

var http = require('http');
var fs = require('fs');

//Inherits from event emitter.
var readStream = fs.createReadStream(__dirname + '/bible_daily.txt','utf8');
var writeStream = fs.createWriteStream(__dirname + '/write_bible.txt');
// Data event.Manual listening.
readStream.on('data',function(chunk){
	console.log('new chunk recieved');
	//console.log(chunk);
	writeStream.write(chunk);
});
//Pipes automatically handle listening of data.
// so we can avoid above listing to data and writing.
// can only be used on read able stream.converting read stream to write stream.
readStream.pipe(writeStream);

// modifying use with server

var server = http.createServer(function(req,res){
	console.log('request was made:' + req.url);

	res.writeHead(200,{'Content-Type': 'text/plain'});
	var readStream = fs.createReadStream(__dirname + '/bible_daily.txt','utf8');
	readStream.pipe(res);
});
server.listen(3000);
console.log('Now listening to port 3000');

/*Example 13
Streams and Buffers
*/

// Example 12
Create server, create req from browser and deal with it.

var http = require('http');
// method to create server. usually store it in var so as to reference it later.
//to deal with it we create function.
var server = http.createServer(function(req,res){
	console.log('request was made:' + req.url);
	// Header: Response, Content type
	res.writeHead(200,{'Content-Type': 'text/plain'});
	// Content of response/data.
	res.end('Hey Kushal');
});
// we need port to listen.
server.listen(3000);
console.log('Now listening to port 3000');



/*Example 11
*/

//Example 10
Create and remove directory

var fs = require('fs');

//create dir
fs.mkdirSync('stuff');
//remove dir
fs.rmdirSync('stuff');

// when async method is used we need to use call back function
// to do something once action is completed.
s.mkdir('stuff',function(){
	fs.readFile('ReadMe.txt','utf8',function(err,data){
		fs.writeFile('./stuff/writeMe.txt',data);
	});
});
// we need dir to be empty to del.
fs.unlink('./stuff/writeMe.txt',function(){
	fs.rmdir('stuff');
});


//Example 9
//Reading and Writing file using node module FS

// Name convetion is module name is var name.
var fs = require('fs');
// To read file. Sync method. fully read file before other can access.
// FIle is Binary data so we need char encoding.
var readMe = fs.readFileSync('ReadMe.txt','utf8');
//Filename, data to write.
fs.writeFileSync('writeMe.txt',readMe);
//Delete file
fs.unlink('writeMe.txt');
//Benefit not blocking code.Non sync. Good for website.
fs.readFile('readMe.txt','utf8',function(err,data){
	fs.writeFile('writeme.txt',data);
	console.log(data);
});
 console.log('test');





// Example 8
var events = require('events');
var util = require('util'); // inherits objects


var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name + 'said :' + msg);
	});
});

james.emit('speak','hey dudes');
ryu.emit('speak','I want a curry');
mary.emit('speak', 'Kushal completed module 8');

//event emitter reacting to event
//element.on('click',function(){})

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
	console.log(msg);
});

myEmitter.emit('someEvent','the event was emitted');


//End Example 8


//Example 7
var stuff = require('./stuff');

console.log(stuff.counter(['shaun','crystal','ryu']));

console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));


 Global Object
setTimeout(function(){
	console.log('3 seconds have passed');
},3000);

var time =0;
var timer = setInterval(function(){
	time += 2;
	console.log(time +' seconds have passed');
	if (time > 5){
		clearInterval(timer);
	}
},2000);

Directory
console.log(__dirname);
console.log(__filename);

// normal function statement
function sayHi(){
	console.log('hi');
}
sayHi();

//function expression
var sayBye = function(){
	console.log('bye');
};

sayBye();

// Similar to above sayBye();
function callFunction(fun){
	fun();
}
callFunction(sayBye);

