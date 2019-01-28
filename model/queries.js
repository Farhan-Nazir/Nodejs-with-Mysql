function queries(con, app) {
  app.get("/queries", (req, res) => {
       // Select the world
     con.query("USE world", error =>
     error ? error : console.log("Database changed to world")
   );
    con.query(
      "SELECT * from country WHERE country_population > 8",
      (error, result) => {
        if (error) throw error;
       // con.release();
        for(let i in result){
            console.log(`${result[i].country_name} population is ${result[i].country_population} million`);
        }
      }
    );

    con.query("SELECT country.country_name, region.region_name from country JOIN region ON country.region_id = region.region_id")
  });
}

module.exports = queries;
