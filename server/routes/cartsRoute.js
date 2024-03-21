const router = require('express').Router();
const db = require('../models');
const cartService = require('../services/cartService');

// använder inte services KANSKE KAN TAS BORT
router.get('/', (req, res) => {
	db.cart.findAll().then((result) => {
		res.send(result);
	});
});

//klar lägger till produkt i cartrow
router.post('/addProduct', (req, res) => {
	const productId = req.body.productId;
	const userId = req.body.userId;
	const amount = req.body.amount;

	cartService.addToCart(productId, userId, amount).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar, ta bort produkt från cartrow
router.delete('/removeProduct', (req, res) => {
	const productId = req.body.productId;
	const userId = req.body.userId;

	cartService.removeFromCart(productId, userId).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// updatera amount på en rad i cartrow
router.put('/increaseAmount', async (req, res) => {
	const productId = req.body.productId;
	const userId = req.body.userId;

	try {
		const result = await cartService.increaseAmountInCart(productId, userId);
		res.status(result.status).json(result.data);
	} catch (error) {
		res.status(error.status).json(error.message);
	}
});

// minska amount på en rad i cartrow
router.put('/decreaseAmount', async (req, res) => {
	const productId = req.body.productId;
	const userId = req.body.userId;
	const amount = req.body.amount;

	try {
		if (amount === 1) {
			const result = await cartService.removeFromCart(productId, userId);
			res.status(result.status).json(result.data);
		} else {
			const result = await cartService.decreaseAmountInCart(productId, userId);
			res.status(result.status).json(result.data);
		}
	} catch (error) {
		res.status(error.status).json(error.message);
	}
});
module.exports = router;
