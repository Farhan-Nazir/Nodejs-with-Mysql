function install(connection, app) {
  app.get("/install", (req, res) => {
    // create the database
    connection.query("CREATE DATABASE world", error =>
      error ? error : console.log("Database created !!")
    );
     // Select the world
     connection.query("USE world", error =>
     error ? error : console.log("Database changed to world")
   );
    // create the region table
    connection.query(
      "CREATE TABLE region (region_id INT NOT NULL AUTO_INCREMENT, region_name varchar(50) DEFAULT NULL, PRIMARY KEY (region_id))",
      error => (error ? error : console.log("Table region created !!"))
    );
    // create the country table
    connection.query(
      "CREATE TABLE country (country_id INT NOT NULL AUTO_INCREMENT, country_name varchar(50) DEFAULT NULL,country_population DECIMAL(10.2) DEFAULT NULL, region_id INT NOT NULL, PRIMARY KEY (country_id))",
      error => (error ? error : console.log("Table country created !!"))
    );
    // create the city table
    connection.query(
      "CREATE TABLE city (city_id INT NOT NULL AUTO_INCREMENT, city_name varchar(50) DEFAULT NULL,city_population DECIMAL(10.2) DEFAULT NULL, country_id INT NOT NULL, PRIMARY KEY (city_id))",
      error => (error ? error : console.log("Table city created !!"))
    );
  });
}

module.exports = install;
