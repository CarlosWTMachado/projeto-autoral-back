import error from "../errors/error";
import { CreateAddress } from "../types/addressInterface";
import addressRepository from "../repositories/addressRepository";

export async function create(address: CreateAddress) {
	return await addressRepository.create(address);
}

export default {
	create,
}