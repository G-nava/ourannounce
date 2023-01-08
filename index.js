"use strict";
const express = require("express");
const app = express();
// const pages = require("./src/pages")

// const path = require("path");
const path = require("path");
// app.use("/pages", pages)

// app.use("/pages", express.static(path.resolve(__dirname, "src", "static")));

app.get("/", (req, res) => {
    // res.send("ñeh");
    res.sendFile(path.resolve(__dirname, "src" , "index.html"));
});
app.get("/client", (req, res) => {
    // res.send("ñeh");
    res.sendFile(path.resolve(__dirname, "src" , "pages", "client.html"));
});

app.listen(process.env.PORT || 5500);