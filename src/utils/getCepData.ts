import axios from 'axios';

export default async function getCepData(cepNumber: number): Promise<string | undefined> {
	const { data } = await axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`);
	if (data.erro !== undefined) return undefined;
	const { localidade } = data;
	return localidade;
}