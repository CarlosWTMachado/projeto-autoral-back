import prisma from "../database";
import { createWalkerType } from "../types/walkerInterface";

export async function findByUserId(userId: number) {
	return await prisma.walker.findUnique({
		where: { userId }
	});
}

export async function create(walkerData: createWalkerType) {
	return await prisma.walker.create({
		data: walkerData
	});
}

export default {
	findByUserId,
	create,
}