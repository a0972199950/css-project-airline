const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static('src'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/dashboard.html"));
});

app.listen(port, () => {
    console.log("server started");
})