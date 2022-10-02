import error from "../errors/error";
import { signUpInterface } from "../types/signUpInterface";
import standardizePhone from "../utils/standardizePhone";
import standardizeCep from "../utils/standardizeCep";
import cepService from "./cepService";
import addressService from "./addressService";
import userService from "./userService";
import phoneService from "./phoneService";

export async function signUp(data: signUpInterface) {
	const cepNumber = standardizeCep(data.address.cep);
	const { id: cepId } = await cepService.FindOrCreate(cepNumber);
	const address = {
		number: data.address.number,
		complement: data.address.complement || null,
		cepId: cepId
	};
	const { id: addressId } = await addressService.create(address);
	const user = {
		email: data.email,
		password: data.password,
		fullName: data.fullName,
		addressId
	};
	const { id: userId } = await userService.create(user);
	for (let value of data.phones) {
		const phone = {
			number: standardizePhone(value),
			userId
		};
		await phoneService.create(phone)
	}
	return;
}

export default {
	signUp,
}