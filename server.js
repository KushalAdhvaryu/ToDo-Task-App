var express = require('express');
var checksum = require('json-checksum');
// const crypto = require('crypto');
// const hash = crypto.createHash('sha256');
// var strigify = require('node-stringify');
var app = express();
var obj= {
	"name" : "demouser1@gmail.com",
	"address" : 
		[
			{
				"test" : "teststring"

			}
		]
};
//{"header":null,"body":{"usrLst":[{"usrLoginInfo":{"usrLoginId":"demouser1@gmail.com","usrPwd":"YZSvwS+DFC4mNarfkdhL9A=="}}]}};
/* {
   "header":null,
  "body":
     {
       "usrLst":
         [
           {
             "usrLoginInfo":
               {
                 "usrLoginId":"demouser1@gmail.com",
                 "usrPwd":"YZSvwS+DFC4mNarfkdhL9A=="
               }
             }
           ]
         }
       }; */
console.log(JSON.stringify(obj));
var checksum=checksum(obj);
console.log(checksum);

// console.log(obj.toString());
// console.log(strigify(obj));
// hash.update("{\"header\":null,\"body\":{\"usrLst\":[{\"usrLoginInfo\":{\"usrLoginId\":\"demouser1@gmail.com\",\"usrPwd\":\"YZSvwS+DFC4mNarfkdhL9A==\"}}]}}");
// console.log(hash.digest('hex'));
app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(c2);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});