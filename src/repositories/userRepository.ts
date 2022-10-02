import prisma from "../database";
import { CreateUser } from "../types/userInterface";

export async function create(user: CreateUser) {
	return await prisma.user.create({
		data: user
	});
}

export default {
	create,
}