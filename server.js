const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  'biggie': {
    birthName: "Christopher George Latore Wallace",
    yearsActive: "1992–1997",
    birthLocation: "Brooklyn, New York City",
  },
 'tupac': {
    birthName: "Lesane Parish Crooks",
    yearsActive: "1989–1996",
    birthLocation: "New York City",
  },
  'ol dirty bastard': {
    birthName: "Russell Tyrone Jones",
    yearsActive: "1992–2004",
    birthLocation: "New York City",
  },
  'method man': {
    birthName: "Clifford Smith, Jr",
    yearsActive: "1992–present",
    birthLocation: "Hempstead, Long Island, New York",
  }
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase()
  if (rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['method man'])
  }
});

app.listen(PORT, () => {
  console.log(`The Server is running on port ${PORT}! You better go catch it!`);
});
