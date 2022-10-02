import error from "../errors/error";
import { CreateUser } from "../types/userInterface";
import userRepository from "../repositories/userRepository";

export async function create(user: CreateUser) {
	return await userRepository.create(user);
}

export async function findByEmail(email: string) {
	return await userRepository.findByEmail(email);
}

export default {
	create,
	findByEmail,
}