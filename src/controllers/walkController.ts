import { Request, Response } from 'express';
import walkService from '../services/walkService';
import { tokenDataInterface } from '../types/tokenDataInterface';

export async function get(req: Request, res: Response) {
	const availableWalks = await walkService.getAllAvailable();
	return res.status(200).send(availableWalks);
}

export default {
	get,
}