import joi from 'joi';

const signInSchema = joi.object({
	'name': joi.string().required(),
	'picture': joi.string().allow(''),
	'vaccinated': joi.boolean().required(),
});

export default signInSchema;