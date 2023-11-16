import { Request, Response } from 'express';
import { Server as SocketIOServer } from 'socket.io';

export class ChatController {
    private io: SocketIOServer;

    constructor(io: SocketIOServer) {
        this.io = io;
    }

    public sendMessage(req: Request, res: Response): void {
        const { message } = req.body;
        this.io.emit('chat message', message);
        res.status(200).json({ message: `Message sent, message: ${message}` });
    }
}