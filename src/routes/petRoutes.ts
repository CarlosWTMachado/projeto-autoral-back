import { Router } from 'express';
import petController from '../controllers/petController';
import schemaValidate from '../middlewares/handleSchemas';
import petSchema from '../schemas/petSchema';
import validateToken from '../middlewares/validateToken';

const petRouter = Router();

petRouter.post('/pet', validateToken, schemaValidate(petSchema), petController.register);
petRouter.get('/pets', validateToken, petController.getAll);
petRouter.get('/pet/:id', validateToken, petController.getById);
petRouter.put('/pet/:id', validateToken, schemaValidate(petSchema), petController.update);
// petRouter.delete('/pet');

export default petRouter;