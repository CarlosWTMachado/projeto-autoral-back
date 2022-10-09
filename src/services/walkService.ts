import error from "../errors/error";
import walkRepository from "../repositories/walkRepository";

export async function getAllAvailable() {
	const availableWalks = await walkRepository.findAll();
	return availableWalks;
}

export default {
	create,
	findByEmail,
	get,
}