const db = require('../models');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');

// klar
async function addToCart(product, userId, amount) {
	try {
		const cart = await db.cart.findOrCreate({
			where: { userId: userId },
			// defaults: { payed: false },
			// order: [['createdAt', 'desc']],
		});

		const cartId = cart[0].id;
		console.log(cartId);

		const newRow = await db.cartRow.upsert({
			productId: product,
			amount: amount,
			cartId: cartId,
		});

		return createResponseSuccess(newRow[0]);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

//

// klar
async function removeFromCart(product, userId) {
	try {
		const cart = await db.cart.findOne({
			where: { userId: userId },
		});
		const cartId = cart.id;
		const rowToRemove = await db.cartRow.destroy({
			where: {
				cartId: cartId,
				productId: product,
			},
		});
		return createResponseSuccess(rowToRemove);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

module.exports = { addToCart, removeFromCart };
