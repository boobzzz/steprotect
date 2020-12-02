import * as BC from '../controllers/BlogController.js';
import router_pkg from 'express';

const { Router } = router_pkg
const router = Router()

router.get('/posts', BC.getPosts)
router.post('/posts', BC.createPost)
router.get('/posts/:id', BC.readPost)
router.put('/posts/:id', BC.updatePost)
router.delete('/posts/:id', BC.deletePost)

export default router;
