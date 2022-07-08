import { greetWithName, greetWithFullName } from '../controllers/greetings.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/greetings/:name', greetWithName);
router.get('/greetings/:firstName/:lastName', greetWithFullName);


export default router;