const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');

router.get('/', (req, res) => {
	db.cart.findAll().then((result) => {
		res.send(result);
	});
});

router.post('/', (req, res) => {
	const cart = req.body;
	const invalidData = validate(cart, constraints);

	if (invalidData) {
		res.status(400).json(invalidData);
	} else {
		db.cart.create(cart).then((result) => {
			res.send(result);
		});
	}
});

router.put('/', (req, res) => {
	const cart = req.body;
	const invalidData = validate(cart, constraints);
	const id = cart.id;
	if (invalidData || !id) {
		res.status(400).json(invalidData || 'Id är obligatoriskt.');
	} else {
		db.cart
			.update(cart, {
				where: { id: cart.id },
			})
			.then((result) => {
				res.send('Inlägget har uppdaterats.');
			});
	}
});

router.delete('/', (req, res) => {
	db.cart
		.destroy({
			where: { id: req.body.id },
		})
		.then((result) => {
			res.json(`Produkten raderades ${result}`);
		});
});
