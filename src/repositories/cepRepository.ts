import prisma from "../database";

export async function findByNumber(cep: number) {
	return await prisma.cep.findUnique({
		where: {
			number: cep
		}
	});
}

export async function create(cep: number) {
	return await prisma.cep.create({
		data: { number: cep }
	})
}

export default {
	findByNumber,
	create,
}