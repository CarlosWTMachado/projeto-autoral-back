import prisma from "../database";
import { CreateAddress } from "../types/addressInterface";

export async function create(address: CreateAddress) {
	return await prisma.address.create({
		data: address
	});
}

export default {
	create,
}