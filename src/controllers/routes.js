import { Router } from 'express';
import * as MC from './MailController';
import * as PC from './PostController';

const router = Router();

router.post('/call', MC.sendNewCall)
router.post('/order', MC.sendNewOrder)

router.get('/posts', PC.indexPost)
router.post('/posts', PC.createPost)
router.get('/posts/:id', PC.readPost)
router.put('/posts/:id', PC.updatePost)
router.delete('/posts/:id', PC.deletePost)

export default router;
