const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send all the leaders!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders.');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send the leader with id ' + req.params.leaderId + '!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /leaders/:leaderId');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('will update the leader with id ' + req.params.leaderId + '! Data received: ' + JSON.stringify(req.body));
})
.delete((req, res, next) => {
    res.end('Deleting the leader with id ' + req.params.leaderId + '.');
});


module.exports = leaderRouter;