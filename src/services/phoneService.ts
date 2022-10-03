import error from "../errors/error";
import { CreatePhone } from "../types/phoneInterface";
import phoneRepository from "../repositories/phoneRepository";

export async function create(phone: CreatePhone) {
	return await phoneRepository.create(phone);
}

export default {
	create,
}