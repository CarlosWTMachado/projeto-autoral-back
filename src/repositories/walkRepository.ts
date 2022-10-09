import prisma from "../database";

export async function findAll() {
	return await prisma.availableWalk.findMany({
		where: { completed: false }
	});
}

export default {
	findAll,
}