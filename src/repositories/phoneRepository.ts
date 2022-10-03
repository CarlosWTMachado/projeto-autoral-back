import prisma from "../database";
import { CreatePhone } from "../types/phoneInterface";

export async function create(phone: CreatePhone) {
	return await prisma.phone.create({
		data: phone
	});
}

export default {
	create,
}