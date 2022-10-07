import error from "../errors/error";
import petRepository from "../repositories/petRepository";
import { tokenDataInterface } from "../types/tokenDataInterface";
import { petDataType } from "../types/petInterface";

export async function create(body: petDataType, tokenData: tokenDataInterface) {
	const foundPet = await petRepository.findByOwnerIdAndName(tokenData.id, body.name);
	if (foundPet !== null) throw error.conflictError('Usuário ja tem um pet cadastrado com esse nome');
	await petRepository.create({ ...body, ownerId: tokenData.id });
	return;
}

export async function getAll(tokenData: tokenDataInterface) {
	const pets = await petRepository.findAll(tokenData.id);
	return pets;
}

export default {
	create,
	getAll,
}