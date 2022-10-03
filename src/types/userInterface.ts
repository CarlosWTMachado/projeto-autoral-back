import { User } from "@prisma/client";

export type CreateUser = Omit<User, 'id'>;
export type SignInUser = Omit<User, 'id' | 'fullName' | 'addressId'>;