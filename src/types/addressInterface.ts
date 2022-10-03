import { Address } from "@prisma/client";

export interface addressInterface {
	cep: string,
	number: number,
	complement?: string
}

export type CreateAddress = Omit<Address, 'id'>;