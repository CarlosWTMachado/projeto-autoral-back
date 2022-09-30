import { Request, Response } from 'express';

export async function signUp(req: Request, res: Response) {
	return res.sendStatus(200);
}

export default {
	signUp,
}