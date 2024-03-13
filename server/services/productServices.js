const db = require('..//models');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const constraints = {
	title: {
		length: {
			minimum: 2,
			maximum: 100,
			tooShort: '^Titeln måste vara minst %{count} tecken lång',
			tooLong: '^Titeln får inte vara längre än %{count} tecken lång',
		},
	},
};

async function getAll() {
	try {
		const allProducts = await db.produ;
		yt;
	} catch (error) {}
}
async function create(product) {
	const invalidData = validate(product, constraints);
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const newProduct = await db.product.create(product);

		// await _addTagToproduct(newProduct, product.tags);
		return createResponseSuccess(newProduct);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}
function update() {}
function destroy() {}
function addRating() {}

module.exports = { getAll, create, update, destroy, addRating };
