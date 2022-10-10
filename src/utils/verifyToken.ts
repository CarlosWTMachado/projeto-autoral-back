import jwt from 'jsonwebtoken';
import env from "../environmentVariables";
import error from '../errors/error';

export default function VerifyToken(token: string) {
	try {
		const dados = jwt.verify(token, env.GetJWTSecret());
		return dados;
	} catch (e) {
		throw error.invalidTokenError('Token invalid or expired');
	}
}