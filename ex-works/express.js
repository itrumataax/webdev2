const express = require('express')
const app = express()
app.get('/home', function(req, res){
app.set('views', process.argv[3]);
app.set('view engine', 'pug');
//res.end('Hello World!')
res.render('index', {date: new Date().toDateString()})
})
//app.set('views', path.join(__dirname, 'templates'))
app.listen(process.argv[2])
