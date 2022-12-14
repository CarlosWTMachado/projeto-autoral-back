import { Request, Response } from 'express';
import walkService from '../services/walkService';
import { tokenDataInterface } from '../types/tokenDataInterface';

export async function get(req: Request, res: Response) {
	const availableWalks = await walkService.getAllAvailable();
	return res.status(200).send(availableWalks);
}

export async function getCompleted(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const completedWalks = await walkService.getAllCompleted(tokenData.id);
	return res.status(200).send(completedWalks);
}

export async function create(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const { petId }: { petId: number } = req.body;
	await walkService.create(tokenData.id, petId);
	return res.sendStatus(201);
}

export async function acceptWalk(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const { walkId } = req.params;
	await walkService.acceptWalk(tokenData.id, Number(walkId));
	return res.sendStatus(201);
}

export async function completeWalk(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const { walkId } = req.params;
	await walkService.completeWalk(tokenData.id, Number(walkId));
	return res.sendStatus(200);
}

export async function getOngoingWalks(req: Request, res: Response) {
	const tokenData: tokenDataInterface = res.locals.tokenData;
	const ongoingWalks = await walkService.getOngoingWalks(tokenData.id);
	return res.status(200).send(ongoingWalks);
}

export default {
	get,
	getCompleted,
	create,
	acceptWalk,
	completeWalk,
	getOngoingWalks,
}