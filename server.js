const express = require("express");
const app = express();
const PORT = 3000;
const compression = require("compression");


app.use(compression());
app.use(express.static("test/"));
app.listen(PORT, () => {
    console.log("Webserver listening on port " + PORT);
})

console.log("hello world");