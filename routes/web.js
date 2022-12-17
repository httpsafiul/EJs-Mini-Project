import express from 'express';
const router = express.Router();
import { loginController } from '../controllers/login.js'
import { signupController } from '../controllers/signup.js'
import { homeController } from '../controllers/home.js'

router.get('/', homeController)
router.get('/signup', signupController)
router.get('/login', loginController)

export default router;