// server.js module

// Load express
const express = require('express');
const path = require('path');
const todoDb = require('./data/todo-db')
const studentDb = require('./data/student-db')

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// Mount middleweare (app.use)


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// Mount routes
app.get('/',function (req, res) {
    res.redirect('/home');
});

app.get('/home',function (req, res) {
    // Never begin the name of the template with a forward slash
    // because ejs view enjine will be configured to not look for forward slash
    res.render('home');
});

app.get('/todos', function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
});

app.get('/students', function (req, res) {
    const students = studentDb.getAll();
    res.render('students/index', { students });
});

app.get('/students/:id', function(req, res) {
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/show', {student: studentDb.getOne(req.params.id)});
});

// Tell the app to listen on port 3000 
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
})