import dotenv from 'dotenv';
dotenv.config();

export const GetApplicationPort = () => Number(process.env.PORT) || 5000;
export const GetDatabaseURL = () => process.env.DATABASE_URL || '';
export const GetJWTSecret = () => process.env.JWTSECRET || '';

export default {
	GetApplicationPort,
	GetDatabaseURL,
	GetJWTSecret,
}