import error from "../errors/error";
import { signUpInterface } from "../types/signUpInterface";
import standardizePhone from "../utils/standardizePhone";
import standardizeCep from "../utils/standardizeCep";
import cepService from "./cepService";

export async function signUp(data: signUpInterface) {
	const cepNumber = standardizeCep(data.address.cep);
	const cep = await cepService.FindOrCreate(cepNumber);
	console.log(cep)
	return;
}

export default {
	signUp,
}