import error from "../errors/error";
import { walkerDataType } from "../types/walkerInterface";
import walkerRepository from "../repositories/walkerRepository";

export async function create(body: walkerDataType, userId: number) {
	const walkerFound = await walkerRepository.findByUserId(userId);
	if (walkerFound !== null) throw error.conflictError('User alredy registred as a walker');

	await walkerRepository.create({ ...body, userId });
	return;
}

export async function get(id: number) {
	const walkerFound = await walkerRepository.findById(id);
	if (walkerFound === null) throw error.notFoundError('Walker not found');
	return walkerFound;
}

export default {
	create,
	get,
}