import { faker } from '@faker-js/faker';
import prisma from '../../src/database';

export function generate() {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
		fullName: faker.name.fullName(),
		address: {
			cep: faker.address.zipCode('#####-###'),
			number: Number(faker.address.buildingNumber()),
			complement: faker.address.secondaryAddress(),
		},
		phones: [faker.phone.number('(##) 9####-####')]
	};
}

// export async function create() {
// 	const recommendation = generate();
// 
// 	const insertedRecommendation = await prisma.recommendation.create({
// 		data: recommendation
// 	});
// 
// 	return { recommendation, insertedRecommendation };
// }

export default {
	generate,
}