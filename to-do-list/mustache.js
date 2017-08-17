const mustacheExpress = require('mustache-express');
const express = require('express');
const fs = require('fs');
const app = express();
const todos = [
  "Meditate"
];
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({
  extended: false
}));
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))

app.get("/", function (req, res) {
  res.render('index', {
    completed: todos,
    // completed: true,
  });
});

app.post("/mylist", function (req, res) {
  todos.push(req.body.to_do);
  res.redirect('/');
})



app.listen(3005, function () {
  console.log('Break large problems into small!')
});
