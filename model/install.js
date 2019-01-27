function install(connection, app) {
  app.get("/install", (req, res) => {
connection.query("USE hyf", (error) => error ? error : console.log("Database changed"));
    connection.query("CREATE TABLE newTable (id INT NOT NULL, name varchar(50) DEFAULT NULL, PRIMARY KEY (id))", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
      console.log("Table created", results);
      // for (let i = 0; i < results.length; i++) {
      //   let item = results[i];
      //   res.send(
      //     "Usernames: " +
      //       item.user_name
      //   );
      // }
    });
  });
}

module.exports = install;
