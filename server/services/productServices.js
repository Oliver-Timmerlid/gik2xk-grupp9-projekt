const db = require('../models');
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
		const allProducts = await db.product
			.findAll
			// {
			// 	include: [db.rating],
			// }
			();
		return createResponseSuccess(
			allProducts
			// allProducts.map((product) => _formatProduct(product))
		);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
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

async function destroy(id) {
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	try {
		await db.product.destroy({
			where: { id },
		});
		return createResponseMessage(200, 'Produkten togs bort.');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function addRating(id, rating) {
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	try {
		rating.ratingId = id;
		const newRating = await db.rating.create(rating);
		return createResponseSuccess(newRating);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function getById(id) {
	try {
		const product = await db.product.findOne({
			where: { id },
			include: [
				db.product,
				db.rating,
				{
					model: db.rating,
					include: [db.product],
				},
			],
		});
		return createResponseSuccess(product);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

function _formatProduct(product) {
	const cleanproduct = {
		id: product.id,
		title: product.title,
		description: product.description,
		price: product.price,
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,

		rating: [],
	};

	if (product.rating) {
		product.rating.map((rating) => {
			return (cleanproduct.rating = [rating.rating, ...cleanproduct.rating]);
		});
		return cleanproduct;
	}
}

module.exports = { getAll, create, update, destroy, addRating, getById };
