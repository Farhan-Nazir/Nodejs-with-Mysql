let express = require("express");
let mysql = require("mysql");

let install = require('./model/install');
let queries = require('./model/queries');

//Create App
let app = express();

//Listen App
let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log("App is started on " + port);
});

//Mysql Connection
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "hyf"
});

connection.connect(err => err ? connection.end() : console.log("Connection Successfull"));



// Only once fire ----->
install(connection, app);
// run queries
queries(connection, app);

//view in browser
app.get("/", (req, res) => {
  connection.query("SELECT * FROM acc_users", function(error, results, fields) {
    if (error) throw error;
    console.log("Total entries", results.length);
    // for (let i = 0; i < results.length; i++) {
    //   let item = results[i];
    //   res.send(
    //     "Usernames: " +
    //       item.user_name 
    //   );
    // }
  });
});
