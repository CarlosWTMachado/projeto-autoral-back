import { Router } from 'express';
import authRouter from './authRoutes';
import petRouter from './petRoutes';

const router = Router();

router.use(authRouter);
router.use(petRouter);

export default router;