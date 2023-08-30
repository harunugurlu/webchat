import express from 'express';
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = new SocketIoServer(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get("/", (req, res) => {
    res.send("Server is running")
})

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

const PORT = 5000;
httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
