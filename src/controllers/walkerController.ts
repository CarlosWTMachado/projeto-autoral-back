import { Request, Response } from 'express';
import walkerService from '../services/walkerService';
import { tokenDataInterface } from '../types/tokenDataInterface';
import { walkerDataType } from '../types/walkerInterface';

export async function register(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const body: walkerDataType = req.body;
	await walkerService.create(body, tokenData.id);
	return res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
	const { id } = req.params;
	const walkerData = await walkerService.get(Number(id));
	return res.status(200).send(walkerData);
}

export default {
	register,
	get,
}