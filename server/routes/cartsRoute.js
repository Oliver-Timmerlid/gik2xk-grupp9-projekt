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
module.exports = router;
