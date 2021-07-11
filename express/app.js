const express = require('express');
const path = require('path');

const app = express();

app.set('port', 8080);
app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/user', (req, res) => {
    res.send('user user')
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})