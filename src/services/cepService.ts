import error from "../errors/error";
import cepRepository from "../repositories/cepRepository";

export async function FindOrCreate(cepNumber: number) {
	const cep = await cepRepository.findByNumber(cepNumber);
	if (cep !== null) return cep;
	else return await cepRepository.create(cepNumber);
}

export default {
	FindOrCreate,
}