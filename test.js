var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index', {'obj':{'host':'host: localhost:8888', 'connection':'connection: keep-alive', 'accept':'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'user-agent':'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36', 'referer': 'referer: http://localhost:8888/about', 'accept-encoding':'accept-encoding: gzip,deflate,sdch', 'accept-language': 'accept-language: en-US,en;q=0.8'}});
});

app.get('/about', function (req, res) {
    res.render('about');
});


app.listen(8888);
console.log('Started server on port 8888');