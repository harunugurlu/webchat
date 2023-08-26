import express from 'express';
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
