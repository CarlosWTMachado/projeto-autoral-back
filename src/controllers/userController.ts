import { Request, Response } from 'express';
import userService from '../services/userService';
import { tokenDataInterface } from '../types/tokenDataInterface';

export async function get(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const userData = await userService.get(tokenData.id);
	return res.status(200).send(userData);
}

export default {
	get,
}