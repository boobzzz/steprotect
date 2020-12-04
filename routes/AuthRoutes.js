import * as AC from '../controllers/AuthController.js';
import router_pkg from 'express';

const { Router } = router_pkg
const router = Router()

router.post('/login', AC.adminLogin)
router.post('/update', AC.adminUpdate)

export default router;