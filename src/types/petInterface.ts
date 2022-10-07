import { Pet } from "@prisma/client";

export type createPetType = Omit<Pet, 'id'>;

export type petDataType = Omit<createPetType, 'ownerId'>;