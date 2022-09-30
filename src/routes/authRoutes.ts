import { Router } from 'express';
import authController from '../controllers/authController';

const authRouter = Router();

authRouter.post('/signup', authController.signUp);

export default authRouter;