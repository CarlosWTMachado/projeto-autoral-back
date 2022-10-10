import { Router } from 'express';
import walkController from '../controllers/walkController';
import validateToken from '../middlewares/validateToken';
import schemaValidate from '../middlewares/handleSchemas';
import walkSchema from '../schemas/walkSchema';

const walkRouter = Router();

walkRouter.post('/walk', validateToken, schemaValidate(walkSchema), walkController.create);
walkRouter.get('/walks', validateToken, walkController.get);
walkRouter.get('/ongoingWalks', validateToken, walkController.getOngoingWalks);
walkRouter.get('/completedWalks', validateToken, walkController.getCompleted);
walkRouter.post('/accept/walk/:walkId', validateToken, walkController.acceptWalk);
walkRouter.post('/complete/walk/:walkId', validateToken, walkController.completeWalk)

export default walkRouter;