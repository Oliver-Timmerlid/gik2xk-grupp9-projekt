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

// klar
async function getAll() {
	try {
		const allProducts = await db.product.findAll({
			include: [db.rating],
		});
		return createResponseSuccess(
			allProducts.map((product) => _formatProduct(product))
		);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}
// klar tro
async function create(product) {
	const invalidData = validate(product, constraints);
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const newProduct = await db.product.create(product);

		return createResponseSuccess(newProduct);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// klar
async function update(product, id) {
	const invalidData = validate(product, constraints);
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const existingProduct = await db.product.findOne({
			where: { id },
		});
		if (!existingProduct) {
			return createResponseError(404, 'Hittade ingen produkt att uppdatera.');
		}
		await db.product.update(product, { where: { id } });
		return createResponseMessage(200, 'Produkten uppdaterades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// klar
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

// klar
async function addRating(id, rating) {
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	try {
		rating.productId = id;
		const newRating = await db.rating.create(rating);
		return createResponseSuccess(newRating);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// klar
async function getById(id) {
	try {
		const product = await db.product.findOne({
			where: { id },
			include: [db.rating],
		});
		return createResponseSuccess(_formatProduct(product));
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// klar
function _formatProduct(product) {
	const cleanproduct = {
		id: product.id,
		title: product.title,
		description: product.description,
		price: product.price,
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,

		ratings: [],
	};

	if (product.ratings) {
		cleanproduct.ratings = [];

		product.ratings.map((rating) => {
			return (cleanproduct.ratings = [
				{
					rating: rating.rating,
				},
				...cleanproduct.ratings,
			]);
		});
		return cleanproduct;
	}
}

module.exports = { getAll, create, update, destroy, addRating, getById };
