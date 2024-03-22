import axios from './api';

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

// http://localhost:5000/carts/removeProduct
export async function removeFromCart(productToSend) {
	try {
		const response = await axios.delete('carts/removeProduct', {
			data: productToSend,
		});
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function increaseAmountInCart(productToSend) {
	try {
		const response = await axios.put('carts/increaseAmount', productToSend);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function decreaseAmountInCart(productToSend) {
	try {
		const { productId, userId, amount } = productToSend;

		if (amount === 1) {
			const response = await axios.delete('carts/removeProduct', {
				data: { productId, userId },
			});
			if (response.status === 200) {
				return response.data;
			} else {
				console.log(data);
				return null;
			}
		} else {
			const response = await axios.put('carts/decreaseAmount', {
				productId,
				userId,
				amount,
			});
			if (response.status === 200) {
				return response.data;
			} else {
				console.log(data);
				return null;
			}
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
