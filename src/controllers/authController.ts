import { Request, Response } from 'express';
import error from '../errors/error';

export async function signUp(req: Request, res: Response) {
	return res.sendStatus(200);
}

export default {
	signUp,
}