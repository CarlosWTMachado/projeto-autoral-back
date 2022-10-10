import prisma from "../database";
import { CreateUser } from "../types/userInterface";

export async function create(user: CreateUser) {
	return await prisma.user.create({
		data: user
	});
}

export async function findByEmail(email: string) {
	return await prisma.user.findUnique({
		where: {
			email
		}
	});
}

export async function findAllById(id: number) {
	return await prisma.user.findUnique({
		where: {
			id
		},
		select: {
			id: true,
			email: true,
			fullName: true,
			address: {
				select: {
					id: true,
					number: true,
					complement: true,
					cep: true
				}
			},
			phones: true
		}
	});
}

export default {
	create,
	findByEmail,
	findAllById,
}