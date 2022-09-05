const express = require('express');

const portApp = 5000;


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/views'));
app.use('/uploads', express.static('uploads'));




app.listen(portApp, () => console.log("Le serveur est lancer sur le port" + " " + portApp));