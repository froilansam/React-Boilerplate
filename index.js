import express from 'express';
import fs from 'fs';
import winston from 'winston';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import serveStatic from 'serve-static';
import React from 'react';
import session from 'express-session';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import database from './app/lib/database';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT);
const db = database();
const app = express();
const router = express.Router();
app.set('port', process.argv[2] || process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', __dirname);
app.use(router);
app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'dist')));
router.use(session({
        resave: false,
        saveUninitialized: true,
        secret: 'WQcptX3p4W'
    }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// RESTful API

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM tbluser;`;
    db.query(queryString, function (err, results, fields) {
        console.log(results[0]);
        req.session.user = results[0];
        console.log(req.session.user)
        res.render('src/index', (err, html) => {
            if (err) throw err;
            res.send(html.replace('content', renderToString(<App />)));
        });
    });

    
});

var people = [];

router.get('/api/people', (req, res) => {
    console.log(people);
    res.send(people);
    console.log(req.session.user);
});

router.delete('/api/people', (req, res) => {
    
    for(var i = 0; i < people.length; i++){
        
        if(req.query.id == people[i].id){
            people.splice(i, 1);
            res.send(people);
        }
    }
    
});

router.post('/api/people', (req, res) => {
    people.push({
        id: people.length + 1,
        name: req.body.name,
        age: req.body.age
    });

    res.send(people);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'))
    winston.info('Server is now running!');
});

module.exports = app;

