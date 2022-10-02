import joi from 'joi';

const signUpSchema = joi.object({
	'email': joi.string().email().required(),
	'password': joi.string().min(10).required(),
	'fullName': joi.string().required(),
	'address': joi.object({
		'cep': joi.string().pattern(/^([0-9]{5}\-?[0-9]{3})$/).required().messages({
			'string.pattern.base': '"address.cep" must be a valid CEP'
		}),
		'number': joi.number().required(),
		'complement': joi.string().allow(''),
	}).required(),
	'phones': joi.array().min(1).items(
		joi.string().pattern(/^(\([0-9]{2}\)|[0-9]{2}) ?9[0-9]{4}\-?[0-9]{4}$/).messages({
			'string.pattern.base': 'phones items must be a valid phone number with ddd'
		})
	).required(),
});

export default signUpSchema;