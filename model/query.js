const yargs = require("yargs");

let command = yargs._[0];
// Countires with population more than 8 million
if (command === "countires") {
  // do something
  console.log("=========================");
  console.log("Countires with population more than 8 million");
  console.log("=========================");
  con.query(query, (error, result) => {
    if (error) throw error;
    for (let i in result) {
      console.log(`${result[i].Name} population is ${result[i].Population}`);
    }
  });
} else {
}
// Cities
if (command === "cities") {
  // do something
} else {
}
