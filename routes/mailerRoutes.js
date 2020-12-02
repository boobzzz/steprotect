import * as MC from '../controllers/MailerController.js';
import router_pkg from 'express';
const { Router } = router_pkg

const router = Router()

router.post('/call', MC.sendNewCall)
router.post('/order', MC.sendNewOrder)

export default router;
