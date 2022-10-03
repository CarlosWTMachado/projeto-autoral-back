import { jest } from '@jest/globals';
import authService from '../../src/services/authService.js';
import signupFactory from '../factories/signupFactory';
import addressService from '../../src/services/addressService';
import cepService from '../../src/services/cepService';
import phoneService from '../../src/services/phoneService';
import userService from '../../src/services/userService';

beforeEach(() => {
	jest.resetAllMocks();
	jest.clearAllMocks();
});

describe('sign up', () => {
	it('should create sign up correctly', async () => {
		const data = signupFactory.generate();
		jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce(null);
		jest.spyOn(cepService, 'FindOrCreate').mockResolvedValueOnce({
			id: 1,
			number: 12345678
		});
		jest.spyOn(addressService, 'create').mockResolvedValueOnce({
			id: 1,
			number: data.address.number,
			complement: data.address.complement,
			cepId: 1
		});
		jest.spyOn(userService, 'create').mockResolvedValueOnce({
			id: 1,
			email: data.email,
			password: data.password,
			fullName: data.fullName,
			addressId: 1
		});
		jest.spyOn(phoneService, 'create').mockResolvedValueOnce({
			id: 1,
			number: data.phones[0],
			userId: 1
		});

		await authService.signUp(data);

		expect(userService.findByEmail).toBeCalled();
		expect(cepService.FindOrCreate).toBeCalled();
		expect(addressService.create).toBeCalled();
		expect(userService.create).toBeCalled();
		expect(phoneService.create).toBeCalled();
	});
	it('should create sign up correctly with address complement null', async () => {
		const data = signupFactory.generate();
		jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce(null);
		jest.spyOn(cepService, 'FindOrCreate').mockResolvedValueOnce({
			id: 1,
			number: 12345678
		});
		jest.spyOn(addressService, 'create').mockResolvedValueOnce({
			id: 1,
			number: data.address.number,
			complement: null,
			cepId: 1
		});
		jest.spyOn(userService, 'create').mockResolvedValueOnce({
			id: 1,
			email: data.email,
			password: data.password,
			fullName: data.fullName,
			addressId: 1
		});
		jest.spyOn(phoneService, 'create').mockResolvedValueOnce({
			id: 1,
			number: data.phones[0],
			userId: 1
		});

		await authService.signUp(data);

		expect(userService.findByEmail).toBeCalled();
		expect(cepService.FindOrCreate).toBeCalled();
		expect(addressService.create).toBeCalled();
		expect(userService.create).toBeCalled();
		expect(phoneService.create).toBeCalled();
	});
	it('should not create sign up', async () => {
		const data = signupFactory.generate();
		jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce({
			id: 1,
			email: data.email,
			password: data.password,
			fullName: data.fullName,
			addressId: 1
		});

		const promise = authService.signUp(data);

		expect(promise).rejects.toEqual({
			type: 'Conflict',
			message: 'Email alredy registred'
		});
		expect(cepService.FindOrCreate).not.toBeCalled();
	});
});