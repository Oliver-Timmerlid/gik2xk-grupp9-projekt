import axios from './api';

export async function getCart(id) {
	try {
		const response = await axios.get(`users/${id}/getCart`);
		if (response.status === 200) return response.data;
		else {
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
