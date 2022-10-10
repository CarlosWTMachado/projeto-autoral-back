import prisma from "../database";
import { completedWalksInterface } from "../types/walkInterface";

export async function findAll() {
	return await prisma.availableWalk.findMany({
		where: { completed: false }
	});
}

export async function findAllCompleted(walkerId: number) {
	return await prisma.$queryRaw<completedWalksInterface>`
		SELECT 
			o."id",
			o."walkerId",
			o."availableWalkId",
			a."petId",
			a."completed"
		FROM "onGoingWalks" o
		JOIN "availableWalks" a
		ON o."availableWalkId" = a."id"
		WHERE o."walkerId" = ${walkerId} AND a."completed" = true
	`;
}

export async function create(petId: number) {
	return await prisma.availableWalk.create({
		data: { petId }
	});
}

export default {
	findAll,
	findAllCompleted,
	create,
}