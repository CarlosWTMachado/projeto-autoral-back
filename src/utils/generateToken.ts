import jwt from 'jsonwebtoken';
import env from "../environmentVariables";

export default function generateToken(dados: any): string {
	const configuracoes = { expiresIn: 60 * 60 * 2 }
	const token: string = jwt.sign(dados, env.GetJWTSecret(), configuracoes);
	return token;
}