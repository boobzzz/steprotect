import * as MC from '../controllers/MailerController.js';
import Router_pkg from 'express';
const { Router } = Router_pkg

const router = Router();

router.post('/call', MC.sendNewCall)
router.post('/order', MC.sendNewOrder)

export default router;
