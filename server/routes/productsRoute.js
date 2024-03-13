const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');

const constraints = {
	title: {
		length: {
			minimum: 2,
			maximum: 100,
			tooShort: 'Titeln måste vara minst %{count} tecken lång. ',
			tooLong: 'Titeln får vara max %{count} tecken lång. ',
		},
	},
};

router.get('/', (req, res) => {
	db.product.getAll().then((result) => {
		res.send(result);
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	// service?
});

router.post('/', (req, res) => {
	const product = req.body;
	const invalidData = validate(product, constraints);

	if (invalidData) {
		res.status(400).json(invalidData);
	} else {
		db.product.create(product).then((result) => {
			res.send(result);
		});
	}
});

router.post('/:id/addRating', (req, res) => {
	//something
});

router.put('/', (req, res) => {
	const product = req.body;
	const invalidData = validate(product, constraints);
	const id = product.id;
	if (invalidData || !id) {
		res.status(400).json(invalidData || 'Id är obligatoriskt.');
	} else {
		db.product
			.update(product, {
				where: { id: product.id },
			})
			.then((result) => {
				res.send('Inlägget har uppdaterats.');
			});
	}
});

router.delete('/', (req, res) => {
	db.product
		.destroy({
			where: { id: req.body.id },
		})
		.then((result) => {
			res.json(`Produkten raderades ${result}`);
		});
});

module.exports = router;
