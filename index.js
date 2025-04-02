const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const port = 8000;
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("New user connected", socket.id);
    
    socket.on("message", (msg) => {
        io.emit("message", msg); 
    });

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");  // Send the index.html file
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
