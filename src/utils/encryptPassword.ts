import bcrypt from 'bcrypt';

export default function encryptPassword(password: string): string {
	const encryptedPassword = bcrypt.hashSync(password, 10);
	return encryptedPassword;
}