const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(`El servidor esta en vivo! http://localhost:${port}`)
    }
})

app.get('/helloworld', (req, res) => {
    res.send('Hello world!')
    next()
})

app.use('/api', apiRouter)

module.exports = app;