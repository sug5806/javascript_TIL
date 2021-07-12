const express = require('express');
const path = require('path');

const app = express();

const router = express.Router();

app.set('port', 8080);

router.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

router.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'))
});

router.get('/user', (req, res) => {
    res.send('user user')
});

router.use((req, res, next) => {
    res.status(404).send('page not found');
})

router.use((req, res, next) => {
    console.log("asdf");
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})