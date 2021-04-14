const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions.');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send the promotion with id ' + req.params.promoId + '!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on /promotions/:promoId');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('will update the promotion with id ' + req.params.promoId + '! Data received: ' + JSON.stringify(req.body));
})
.delete((req, res, next) => {
    res.end('Deleting the promotion with id ' + req.params.promoId + '.');
});

module.exports = promoRouter;