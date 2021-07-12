const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

app.set('port', 8080);
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
}))
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter);
app.use('/user', userRouter);


app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.get('/', (req, res) => {
    res.status(200);

    res.cookie('myasdf', 'asdf', {
        httpOnly: true,
    })
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/user', (req, res) => {
    res.send('user user')
});

app.get('/json', (req, res) => {
    res.json( {hello: 'express'})
})

app.use(app);

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
})