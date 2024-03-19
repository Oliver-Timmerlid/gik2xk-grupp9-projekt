import axios from './api';

//kopierad från produktsercicwA<

// http://localhost:5000/carts/addProduct
export async function addToCart(productToSend) {
	try {
		const response = await axios.post('carts/addProduct', productToSend);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
