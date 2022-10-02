import { Request, Response } from 'express';
import authService from '../services/authService';

export async function signUp(req: Request, res: Response) {
	const body = req.body;
	await authService.signUp(body);
	return res.sendStatus(201);
}

export default {
	signUp,
}