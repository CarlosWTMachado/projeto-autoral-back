import joi from 'joi';

const tokenSchema = joi.object({
	'authorization': joi.string().pattern(/^Bearer */).required().messages({
		'string.pattern.base': 'token must be send correctly with "Bearer " in front'
	}),
});

export default tokenSchema;