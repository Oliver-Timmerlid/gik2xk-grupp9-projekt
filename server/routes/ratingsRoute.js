const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');

router.get('/', (req, res) => {
	db.rating.findAll().then((result) => {
		res.send(result);
	});
});

router.post('/', (req, res) => {
	const rating = req.body;
	// const invalidData = validate.isNumber(rating);

	db.rating.create(rating).then(
		(result) => {
			res.send(result);
		}

		// if (invalidData) {
		// 	);
		// } else {
		// 	res.status(400).json(invalidData);
		// }
	);
});

router.delete('/', (req, res) => {
	db.rating
		.destroy({
			where: { id: req.body.id },
		})
		.then((result) => {
			res.json(`Ratingen raderades!`);
		});
});

module.exports = router;
