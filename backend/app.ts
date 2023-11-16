import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import chatRoutes from './routes/chatRoutes';

class App {
    public express: Express;
    public httpServer: http.Server;
    public io: Server;

    constructor() {
        this.express = express();
        this.httpServer = http.createServer(this.express);
        this.io = new Server(this.httpServer, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST']
            }
        })

        this.configureMiddleware();
        this.mountRoutes();
        this.configureSocket();
    }

    private configureMiddleware(): void {
        this.express.use(express.json());
    }

    private mountRoutes(): void {
        this.express.get("/", (req, res) => {
            res.send("Server is running");
        })

        // Other routes will come here
        this.express.use('/chat', chatRoutes);
    }

    private configureSocket(): void {
        this.io.on('connection', (socket) => {
            console.log('A user connected');

            socket.on('chat message', (msg) => {
                console.log('message: ' + msg);
                socket.emit('chat message', msg)
            })

            socket.on('disconnect', () => console.log('User disconnected'));

            // Setup your Socket.IO events here
            // Example: socket.on('chat message', (msg) => { ... });
        });
    }
}

const appInstance = new App();

export const httpServer = appInstance.httpServer;
export const io = appInstance.io;