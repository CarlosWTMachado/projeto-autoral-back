import { Request, Response, NextFunction } from 'express';
import { errorInterface as Error, errorTypeToStatusCode } from '../errors/error';

export default function errorHandlerMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
	const statusCode = errorTypeToStatusCode(error.type);

	return res.status(statusCode).send(error.message);
}