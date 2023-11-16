import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

import { io } from '../app';

const router = Router();
const chatController = new ChatController(io);

router.post('/sendMessage', chatController.sendMessage);

export default router;