import prisma from "../database";
import { createPetType } from "../types/petInterface";

export async function findByOwnerIdAndName(ownerId: number, name: string) {
	return await prisma.pet.findUnique({
		where: {
			OwnerId_name: { ownerId, name }
		}
	});
}

export async function create(pet: createPetType) {
	return await prisma.pet.create({
		data: pet
	});
}

export async function findAll(ownerId: number) {
	return await prisma.pet.findMany({
		where: { ownerId }
	});
}

export async function findById(ownerId: number, id: number) {
	return await prisma.pet.findUnique({
		where: {
			OwnerId_id: { ownerId, id }
		}
	});
}

export async function update(pet: createPetType, id: number) {
	return await prisma.pet.update({
		where: { id },
		data: pet
	});
}

export async function deleteById(id: number) {
	return await prisma.pet.delete({
		where: { id }
	});
}

export default {
	findByOwnerIdAndName,
	create,
	findAll,
	findById,
	update,
	deleteById,
}