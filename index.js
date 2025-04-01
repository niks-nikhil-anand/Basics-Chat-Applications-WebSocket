const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const port = 8000;

app.use(express.static("public"));

server.listen({ port }, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


