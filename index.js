// Setup express and ejs
var express = require('express')
var ejs = require('ejs')

//create the express application object
const app = express()
const port = 8000

//tell express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

//set up the body parser
app.use(express.urlencoded({extended: true}));

//load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

//start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


