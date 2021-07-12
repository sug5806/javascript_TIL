const express = require('express');
const path = require('path');

const app = express();

app.set('port', 8080);

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});


app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/user', (req, res) => {
    res.send('user user')
})

app.use((err, req, res, next) => {
    console.log(err);
    next();
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})