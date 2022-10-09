import prisma from "../database";
import { createWalkerType } from "../types/walkerInterface";

export async function findByUserId(userId: number) {
	return await prisma.walker.findUnique({
		where: { userId }
	});
}

export async function findById(id: number) {
	return await prisma.walker.findUnique({
		where: { id }
	});
}

export async function create(walkerData: createWalkerType) {
	return await prisma.walker.create({
		data: walkerData
	});
}

export default {
	findByUserId,
	findById,
	create,
}