const express = require("express");
const request = require("request");

const app = express();
const port = process.env.PORT || 3001;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//can u run automated programs here.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`http://localhost:${port}`));

app.get("/me", (req, res) => {
  // read query parameters
  const symbol = req.query["symbol"];
  const range = req.query["range"];

  for (let i = 0; i < 100; i++) {
    console.log("running");
    sleep(1000);
  }

  //     // craft IEX API URL
  //      const url = `http://api-mainnet.magiceden.dev/v2/tokens/CVwMeU3gmtUT6xvmUkUAwDUtWWikvxZvetXaPE4etGDV`;

  // //     // make request to IEX API and forward response
  //     request(url).pipe(res);
  //     console.log("run");
  // // let x = '{"name":"DOJO DEGEN #1","symbol":"DD","description":"They’re just a bunch of Broke Samurai that have no war to fight in. They beat each other senseless with dead chickens, gamble like degenerates and cling to the delusion that one day their name will echo through the histories.","seller_fee_basis_points":999,"image":"0.png","attributes":[{"trait_type":"Accessories","value":"The Old Dragon"},{"trait_type":"Background","value":"The Old Dragon"},{"trait_type":"Body","value":"The Old Dragon"},{"trait_type":"Clothing","value":"The Old Dragon"},{"trait_type":"Face","value":"The Old Dragon"},{"trait_type":"Glasses","value":"The Old Dragon"},{"trait_type":"Hair","value":"The Old Dragon"},{"trait_type":"Weapon","value":"The Old Dragon"},{"trait_type":"Encrypted Traits","value":"U2FsdGVkX1+miU/m2yvxfY54RVE+AZ5vujvDklwdQS0="}],"properties":{"files":[{"uri":"0.png","type":"image/png"}],"category":"image","creators":[{"address":"9TRzQP9oxDYti5pDyrV7VK9yNaijcPwpuDyDkaEvS4oe","share":100}]},"collection":{"name":"Degen Dojo","family":"Dojo Degen"}}';
  // res.send(x);
});
