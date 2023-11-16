import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';

class App {
    public express: Express;
    public httpServer: http.Server;
    public io: Server;

    constructor() {
        this.express = express();
        this.httpServer = http.createServer(this.express);
        this.io = new Server(this.httpServer)

        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.express.get("/", (req, res) => {
            res.send("Server is running")
        })

        // Other routes will come here

    }

    private configureSocket(): void {
        this.io.on('connection', (socket) => {
            console.log('A user connected');

            socket.on('disconnect', () => console.log('User disconnected'));

            // Setup your Socket.IO events here
            // Example: socket.on('chat message', (msg) => { ... });
        });
    }
}

export default new App().httpServer;