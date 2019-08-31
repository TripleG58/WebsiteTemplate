/**
 * Personal website Node.js app template
 * Created by: Gerald Gehrke
 * Date: 7/7/2019
 */

import { readFileSync } from 'fs';
import express, { static } from 'express';
var app = express();
var port = process.env.PORT || 3000;

app.use(static('public'));

app.get('/', function(req, res) {
    var file = '/public/index.html';
    try {
        file = readFileSync(file);
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
        } else {
            throw err;
        }
    }
    res.send(file);
});

app.listen(port);

