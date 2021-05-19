const express = require("express");
const app = express();
const port = 5000;

const contactData = require("./src/api/data");
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function findContacts(str) {
  const expr = RegExp(".*" + escapeRegExp(str) + ".*", "i");

  return contactData.filter(function (item) {
    return expr.test(item.name);
  });
}

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

function randomDelayInterval() {
  var max = 3000;
  var min = 1200;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/contacts", async (req, res) => {
  const { term } = req.query;
  await sleep(randomDelayInterval());
  if (!term || typeof term !== "string" || term.length < 1) {
    res.sendStatus(400);
    res.json({
      error: "term query param required and of minumum of 3 chars",
    });
    return;
  }

  const decodedTerm = decodeURIComponent(term);
  res.json(findContacts(decodedTerm));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
