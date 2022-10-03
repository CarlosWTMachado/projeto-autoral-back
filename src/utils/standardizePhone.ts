export default function standardizePhone(phone: string) {
	let resultPhone = phone.trim();
	resultPhone = resultPhone.replace('(', '');
	resultPhone = resultPhone.replace(')', '');
	resultPhone = resultPhone.replace(' ', '');
	resultPhone = resultPhone.replace('-', '');
	return resultPhone;
}