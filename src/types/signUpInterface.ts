import { addressInterface } from './addressInterface';

export interface signUpInterface {
	email: string,
	password: string,
	fullName: string,
	address: addressInterface,
	phones: string[]
}