let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let mysql = require("mysql");

let install = require("./model/install");
let queries = require("./model/queries");

//Create App
let app = express();
app.use(express.static(path.join(__dirname + "views")));

//Listen App
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App is started on " + port);
});

//Mysql Connection
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  multipleStatements: true
  //database: "world"
});

connection.connect(err => {
  err ? connection.end() : console.log("Connection Successfull");
  // Select the world
  connection.query("USE new_world", error =>
    error ? error : console.log("Queries: Database changed to world")
  );
});

// Only once fire ----->
install(connection, app);
// run queries
queries(connection, app);

//view in browser
app.get("/", (req, res) => {
  res.send("index");
});
