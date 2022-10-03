import bcrypt from 'bcrypt';

export default function validatePassword(password: string, encryptedPassword: string): boolean {
	const compare: boolean = bcrypt.compareSync(password, encryptedPassword);
	return compare;
}