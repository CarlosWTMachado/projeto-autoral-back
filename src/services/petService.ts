import error from "../errors/error";
import petRepository from "../repositories/petRepository";
import { tokenDataInterface } from "../types/tokenDataInterface";
import { petDataType } from "../types/petInterface";

export async function create(body: petDataType, ownerId: number) {
	const foundPet = await petRepository.findByOwnerIdAndName(ownerId, body.name);
	if (foundPet !== null) throw error.conflictError('Usuário ja tem um pet cadastrado com esse nome');
	await petRepository.create({ ...body, ownerId });
	return;
}

export async function getAll(ownerId: number) {
	const pets = await petRepository.findAll(ownerId);
	return pets;
}

export async function getById(ownerId: number, petId: number) {
	const pet = await petRepository.findById(ownerId, petId);
	if (pet === null) throw error.notFoundError('Pet não encontrado');
	return pet;
}

export default {
	create,
	getAll,
	getById,
}