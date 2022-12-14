import error from "../errors/error";
import petRepository from "../repositories/petRepository";
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

export async function update(body: petDataType, ownerId: number, petId: number) {
	const pet = await petRepository.findById(ownerId, petId);
	if (pet === null) throw error.notFoundError('Pet não encontrado');

	await petRepository.update({ ...body, ownerId }, petId);
	return;
}

export async function deleteById(ownerId: number, petId: number) {
	const pet = await petRepository.findById(ownerId, petId);
	if (pet === null) throw error.notFoundError('Pet não encontrado');

	await petRepository.deleteById(petId);
	return;
}

export default {
	create,
	getAll,
	getById,
	update, 
	deleteById,
}