import { Request, Response, NextFunction } from 'express';
import tokenSchema from '../schemas/tokenSchema';
import VerifyToken from '../utils/verifyToken';
import error from '../errors/error';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
	const { authorization } = req.headers;
	if (authorization === undefined || authorization === '') throw error.badRequestError('Token missing');

	const validate = tokenSchema.validate({ authorization });
	if (validate.error) throw error.invalidTokenError('Token invalid or expired');

	const token = authorization.replace('Bearer ', '');
	const data = VerifyToken(token);
	res.locals.tokenData = data;
	next();
}