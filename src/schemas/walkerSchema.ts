import joi from 'joi';

const walkerSchema = joi.object({
	'cpf': joi.string().pattern(/^([0-9]{11}|[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/).required().messages({
		'string.pattern.base': 'cpf must be a valid CPF'
	}),
	'picture': joi.string().required(),
});

export default walkerSchema