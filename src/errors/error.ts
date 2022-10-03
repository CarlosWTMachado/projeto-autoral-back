export interface errorInterface {
	type: string;
	message: string;
}

export class Error implements errorInterface {
	type;
	message;

	constructor(type: string = '', message: string = '') {
		this.type = type;
		this.message = message;
	}

	getType() {
		return this.type;
	}

	setType(type: string) {
		this.type = type;
	}

	getMessage() {
		return this.message;
	}

	setMessage(message: string) {
		this.message = message;
	}
}

export function badRequestError(message: string = '') {
	return new Error('BadRequest', message);
}

export function unauthorizedError(message: string = '') {
	return new Error('Unauthorized', message);
}

export function notFoundError(message: string = '') {
	return new Error('NotFound', message);
}

export function notAcceptableError(message: string = '') {
	return new Error('NotAcceptable', message);
}

export function conflictError(message: string = '') {
	return new Error('Conflict', message);
}

export function internalError(message: string = 'Internal Error') {
	return new Error('InternalError', message);
}

export function errorTypeToStatusCode(type: string): number {
	switch (type) {
		case 'BadRequest': return 400;
		case 'Unauthorized': return 401;
		case 'NotFound': return 404;
		case 'NotAcceptable': return 406;
		case 'Conflict': return 409;
		case 'InternalError': return 500;
		default: return 0;
	}
}

export default {
	badRequestError,
	unauthorizedError,
	notFoundError,
	notAcceptableError,
	conflictError,
	internalError,
}