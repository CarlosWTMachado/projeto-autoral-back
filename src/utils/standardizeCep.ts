export default function standardizeCep(cep: string) {
	let resultCep = cep.trim();
	resultCep = resultCep.replace('-', '');
	return Number(resultCep);
}