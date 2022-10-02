import error from "../errors/error";
import { signUpInterface } from "../types/signUpInterface";
import standardizePhone from "../utils/standardizePhone";
import standardizeCep from "../utils/standardizeCep";
import cepService from "./cepService";
import addressService from "./addressService";
import userService from "./userService";
import phoneService from "./phoneService";

export async function signUp(data: signUpInterface) {
	// verify if email is alredy registred
	const exitentUser = await userService.findByEmail(data.email);
	if (exitentUser !== null) throw error.conflictError('Email alredy registred');
	// verify if cep alredy exists if not create
	const cepNumber = standardizeCep(data.address.cep);
	const { id: cepId } = await cepService.FindOrCreate(cepNumber);
	// add user address
	const address = {
		number: data.address.number,
		complement: data.address.complement || null,
		cepId: cepId
	};
	const { id: addressId } = await addressService.create(address);
	// register user 
	const user = {
		email: data.email,
		password: data.password,
		fullName: data.fullName,
		addressId
	};
	const { id: userId } = await userService.create(user);
	// add all user phones
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