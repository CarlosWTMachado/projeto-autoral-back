import { Walker } from "@prisma/client";

export type createWalkerType = Omit<Walker, 'id'>;

export type walkerDataType = Omit<createWalkerType, 'userId'>;