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

export default {
	findByOwnerIdAndName,
	create,
	findAll,
}