import { Cep } from "@prisma/client";

export type CreateCep = Omit<Cep, 'id'>;