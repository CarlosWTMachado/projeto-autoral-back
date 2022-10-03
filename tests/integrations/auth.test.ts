import app from '../../src/app';
import supertest from 'supertest';
import prisma from '../../src/database';
import signupFactory from '../factories/signupFactory';

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE ceps CASCADE`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Test POST /signup', () => {
	it('Return 201, sign up correctly', async () => {
		const body = signupFactory.generate();

		const result = await supertest(app).post('/signup').send(body);

		expect(result.status).toEqual(201);
	});
	it('Return 409, try sign up with email alredy registred', async () => {
		const body = signupFactory.generate();
		await supertest(app).post('/signup').send(body);

		const result = await supertest(app).post('/signup').send(body);

		expect(result.status).toEqual(409);
	});
	it('Return 400, try signup without data', async () => {
		const result = await supertest(app).post('/signup').send();

		expect(result.status).toEqual(400);
	});
});