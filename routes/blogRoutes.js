import * as PC from '../controllers/PostController.js';
import Router_pkg from 'express';
const { Router } = Router_pkg

const router = Router();

router.get('/posts', PC.indexPost)
router.post('/posts', PC.createPost)
router.get('/posts/:id', PC.readPost)
router.put('/posts/:id', PC.updatePost)
router.delete('/posts/:id', PC.deletePost)

export default router;
