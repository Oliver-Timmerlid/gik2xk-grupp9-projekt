const db = require('../models');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const constraints = {
	email: {
		length: {
			minimum: 4,
			maximum: 200,
			tooShort: '^E-postadressen måste vara minst %{count} tecken lång.',
			tooLong: 'Titeln får vara max %{count} tecken lång. ',
		},
		email: {
			message: '^E-postadressen är i ett felaktigt format dumsnut.',
		},
	},
	firstName: {
		length: {
			minimum: 2,
			maximum: 20,
			tooShort: 'Ditt namn är för kort',
			tooLong: 'Ditt nam är för långt',
		},
	},
	lastName: {
		length: {
			minimum: 2,
			maximum: 20,
			tooShort: 'Ditt namn är för kort',
			tooLong: 'Ditt nam är för långt',
		},
	},
	password: {
		length: {
			minimum: 2,
			maximum: 20,
			tooShort: 'För kort lösenord',
			tooLong: 'För långt lösenord',
		},
	},
};

// klar
async function getCart(id) {
	try {
		const cart = await db.cart.findOne({
			where: { id },
			include: [
				db.user,
				db.product,
				// {
				// 	model: db.product,
				// 	include: [db.cartRow],
				// },
			],
		});
		return createResponseSuccess(cart);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}
// klar
async function getAll() {
	try {
		const users = await db.user.findAll();
		return createResponseSuccess(users);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

//klar
async function create(user) {
	const invalidData = validate(user, constraints);
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const user = await db.user.crete(user);
		return createResponseSuccess(user);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}
//klar
async function update(user) {
	const invalidData = validate(user, constraints);
	const id = user.id;
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const existingUser = db.user.findOne({ where: { id } });
		if (!existingUser) {
			return createResponseError(404, 'Hittade inget användare att uppdatera');
		}

		const updatedUser = await db.user.update(user, {
			where: { id },
		});
		return createResponseSuccess(updatedUser);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// klar
async function destroy(userId) {
	try {
		const deletedUser = await db.user.destroy({
			where: { id: userId },
		});
		return createResponseSuccess(deletedUser);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

module.exports = { getCart, getAll, destroy, create, update };
