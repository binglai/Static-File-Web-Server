var http = require('http');
var fs = require('fs');
var port = 3000;

http.createServer(handleRequest).listen(port);
console.log('Started server on port', port);

function serveStatic(res, path, contentType, resCode) {
	fs.readFile(path, function(err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' }); 
			res.end('500 - Internal Error');
		}
		else if (err) {
			res.writeHead(404, { 'Content-Type': 'text/plain' }); 
			res.end('404 - Not Found');
		}
		else {
			res.writeHead(resCode, { 'Content-Type': contentType }); 
			res.end(data);
		}
	});
}

var d = new Date();
var n = d.toLocaleString();

function handleRequest(req, res) {

	if (req.url.toLowerCase().replace(/\/$/,"") === '/home' || req.url.toLowerCase() === '/') {
		serveStatic(res, './public/index.html', 'text/html', 200);
		var responseStatusCode = 200;
		var responseStatusCodeMessage = 'OK';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	} 

	else if (req.url.toLowerCase().replace(/\/$/,"") === '/about') {
		serveStatic(res, './public/about.html', 'text/html', 200);
		var responseStatusCode = 200;
		var responseStatusCodeMessage = 'OK';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	}

	else if (req.url.toLowerCase().replace(/\/$/,"") === '/me') {
		res.writeHead(301, { 'Location': 'http://localhost:3000/about' }); 
		var responseStatusCode = 301;
		var responseStatusCodeMessage = 'Moved Permanently';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
		res.end();
	} 

	else if (req.url.toLowerCase().replace(/\/$/,"") === '/img/image1.png') {
		serveStatic(res, './public/img/image1.png', 'image/png', 200);
		var responseStatusCode = 200;
		var responseStatusCodeMessage = 'OK';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	} 

	else if (req.url.toLowerCase().replace(/\/$/,"") === '/img/image2.png') {
		serveStatic(res, './public/img/image2.png', 'image/png', 200);
		var responseStatusCode = 200;
		var responseStatusCodeMessage = 'OK';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	} 

	else if (req.url.toLowerCase().replace(/\/$/,"") === '/css/base.css') {
		serveStatic(res, './public/css/base.css', 'text/css', 200);
		var responseStatusCode = 200;
		var responseStatusCodeMessage = 'OK';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	} 

	else {
		serveStatic(res, './public/404.html', 'text/html', 404);
		var responseStatusCode = 404;
		var responseStatusCodeMessage = 'Not Found';
		console.log(n + ' GET ' + req.url + " " + responseStatusCode + ' ' + responseStatusCodeMessage);
	}
}