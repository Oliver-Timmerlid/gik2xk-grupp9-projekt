import axios from './api';

export async function getAll(endpoint = '/products') {
	try {
		const response = await axios.get(endpoint);
		if (response.status === 200) return response.data;
		else {
			console.log(response);
			return [];
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function getOne(id) {
	try {
		const response = await axios.get(`/products/${id}`);
		if (response.status === 200) return response.data;
		else {
			console.log(response.data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function create(product) {
	try {
		const response = await axios.post('/products', product);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function update(product) {
	try {
		const response = await axios.put(`/products/${id}`);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
// ej klar
export async function remove(id) {
	try {
		const response = await axios.delete(`/products`);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
//Ej klar AddRating
export async function addComment(postId, comment) {
	try {
		const response = await axios.post(`/posts/${postId}/addComment`, comment);
		if (response.status === 200) return response.data;
		else {
			console.log(data);
			return null;
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
