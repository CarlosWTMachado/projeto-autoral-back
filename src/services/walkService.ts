import error from "../errors/error";
import walkRepository from "../repositories/walkRepository";
import walkerService from "./walkerService";
import petService from "./petService";

export async function getAllAvailable() {
	const availableWalks = await walkRepository.findAll();
	return availableWalks;
}

export async function getAllCompleted(id: number) {
	const walker = await walkerService.getByUserId(id);
	const completedWalks = await walkRepository.findAllCompleted(walker.id);
	return completedWalks;
}

export async function create(id: number, petId: number) {
	await petService.getById(id, petId);
	await walkRepository.create(petId);
	return;
}

export async function acceptWalk(id: number, walkId: number) {
	const walker = await walkerService.getByUserId(id);
	await walkRepository.acceptWalk(walker.id, walkId)
	return;
}

export async function completeWalk(id: number, walkId: number) {
	await walkerService.getByUserId(id);
	const ongoingWalk = await walkRepository.findById(id, walkId);
	if (ongoingWalk === null) throw error.notFoundError('ongoing walk not found');
	if (ongoingWalk.availableWalk.completed) throw error.notModifiedError('This walk is alredy completed');
	await walkRepository.completeWalk(walkId);
	return;
}

export default {
	getAllAvailable,
	getAllCompleted,
	create,
	acceptWalk,
	completeWalk,
}