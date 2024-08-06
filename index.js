const express = require("express");
const serveIndex = require("serve-index");
const path = require("path");

const app = express();

// Serve static files from the current directory
app.use("/ftp", express.static("."), serveIndex(".", { icons: true }));

// Start the server on port 5005
app.listen(5005, () => {
    console.log("Server is running on http://localhost:5005/ftp");
});