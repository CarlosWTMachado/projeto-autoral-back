import error from "../errors/error";
import { walkerDataType } from "../types/walkerInterface";
import walkerRepository from "../repositories/walkerRepository";

export async function create(body: walkerDataType, userId: number) {
	const walkerFound = await walkerRepository.findByUserId(userId);
	if (walkerFound !== null) throw error.conflictError('User alredy registred as a walker');

	await walkerRepository.create({ ...body, userId });
	return;
}

export default {
	create,
}