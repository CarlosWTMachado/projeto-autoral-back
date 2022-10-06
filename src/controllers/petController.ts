import { Request, Response } from 'express';

export async function register(req: Request, res: Response) {
	return res.sendStatus(201);
}

export default {
	register,
}