import prisma from "../database";
import { completedWalksInterface } from "../types/walkInterface";

export async function findAll() {
	return await prisma.availableWalk.findMany({
		where: { completed: false }
	});
}

export async function findById(walkerId: number, availableWalkId: number) {
	return await prisma.onGoingWalk.findUnique({
		where: { walkerId_walkId: { walkerId, availableWalkId } },
		include: { availableWalk: true }
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

export async function findAllOngoingWalks(walkerId: number) {
	return await prisma.onGoingWalk.findMany({
		include: {
			availableWalk: true
		},
		where: { walkerId, availableWalk: { completed: false } }
	})
}

export async function create(petId: number) {
	return await prisma.availableWalk.create({
		data: { petId }
	});
}

export async function acceptWalk(walkerId: number, availableWalkId: number) {
	return await prisma.onGoingWalk.create({
		data: { walkerId, availableWalkId }
	});
}

export async function completeWalk(id: number) {
	return await prisma.availableWalk.update({
		data: { completed: true },
		where: { id }
	});
}

export default {
	findAll,
	findAllCompleted,
	create,
	acceptWalk,
	findById,
	completeWalk,
	findAllOngoingWalks,
}