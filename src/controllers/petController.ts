import { Request, Response } from 'express';
import petService from '../services/petService';
import { petDataType } from '../types/petInterface';
import { tokenDataInterface } from '../types/tokenDataInterface';

export async function register(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const body: petDataType = req.body;
	await petService.create(body, tokenData);
	return res.sendStatus(201);
}

export async function getAll(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const pets = await petService.getAll(tokenData);
	return res.status(200).send(pets);
}

export default {
	register,
	getAll,
}