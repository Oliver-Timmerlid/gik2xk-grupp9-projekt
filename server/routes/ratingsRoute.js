const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
	db.rating.findAll().then((result) => {
		res.send(result);
	});
});

router.post('/', (req, res) => {
	const rating = req.body;

	db.rating.create(rating).then((result) => {
		res.send(result);
	});
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
