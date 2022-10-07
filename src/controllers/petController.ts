import { Request, Response } from 'express';
import petService from '../services/petService';
import { petDataType } from '../types/petInterface';
import { tokenDataInterface } from '../types/tokenDataInterface';

export async function register(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const body: petDataType = req.body;
	await petService.create(body, tokenData.id);
	return res.sendStatus(201);
}

export async function getAll(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const pets = await petService.getAll(tokenData.id);
	return res.status(200).send(pets);
}

export async function getById(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const { id } = req.params;
	const pet = await petService.getById(tokenData.id, Number(id));
	return res.status(200).send(pet);
}

export async function update(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const body: petDataType = req.body;
	const { id } = req.params;
	await petService.update(body, tokenData.id, Number(id));
	return res.sendStatus(200);
}

export async function deleteById(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const { id } = req.params;
	const pets = await petService.deleteById(tokenData.id, Number(id));
	return res.sendStatus(200);
}

export default {
	register,
	getAll,
	getById,
	update,
	delete: deleteById,
}