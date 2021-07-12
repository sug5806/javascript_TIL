const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const router = express.Router();

app.set('port', 8080);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


router.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

router.get('/', (req, res) => {
    res.status(200);

    res.cookie('myasdf', 'asdf', {
        httpOnly: true,
    })
    res.sendFile(path.join(__dirname, 'index.html'))
});

router.get('/user', (req, res) => {
    res.send('user user')
});

router.get('/json', (req, res) => {
    res.json( {hello: 'express'})
})

app.use(router);

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})