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

export default {
	findByOwnerIdAndName,
	create,
}