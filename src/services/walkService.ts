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

export default {
	getAllAvailable,
	getAllCompleted,
	create,
}