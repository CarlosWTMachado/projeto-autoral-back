import joi from 'joi';

const walkSchema = joi.object({
	'petId': joi.number().required(),
});

export default walkSchema