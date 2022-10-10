import joi from 'joi';

const petSchema = joi.object({
	'name': joi.string().required(),
	'picture': joi.string().allow(''),
	'vaccinated': joi.boolean().required(),
});

export default petSchema