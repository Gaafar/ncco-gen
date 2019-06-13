const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const { ncco, edit } = req.query;
  if (!ncco || edit) {
    res.sendFile(path.join(__dirname, "static/index.html"));
    return;
  }
  console.log(ncco);

  res.json(JSON.parse(Buffer.from(ncco, "base64")));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
