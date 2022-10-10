import { Router } from 'express';
import authRouter from './authRoutes';
import petRouter from './petRoutes';
import walkRouter from './walkRoutes';

const router = Router();

router.use(authRouter);
router.use(petRouter);
router.use(walkRouter);

export default router;