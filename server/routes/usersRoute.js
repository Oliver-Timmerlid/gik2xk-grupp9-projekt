const router = require('express').Router();
const db = require('../models');
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

router.get('/', (req, res) => {
	db.user.findAll().then((result) => {
		res.send(result);
	});
});

router.post('/', (req, res) => {
	const user = req.body;
	const invalidData = validate(user, constraints);

	if (invalidData) {
		res.status(400).json(invalidData);
	} else {
		db.user.create(user).then((result) => {
			res.send(result);
		});
	}
});

router.put('/', (req, res) => {
	const user = req.body;
	const invalidData = validate(user, constraints);
	const id = user.id;
	if (invalidData || !id) {
		res.status(400).json(invalidData || 'Id är obligatoriskt.');
	} else {
		db.user
			.update(user, {
				where: { id: user.id },
			})
			.then((result) => {
				res.send('Inlägget har uppdaterats.');
			});
	}
});

router.delete('/', (req, res) => {
	db.user
		.destroy({
			where: { id: req.body.id },
		})
		.then((result) => {
			res.json(`Produkten raderades ${result}`);
		});
});

module.exports = router;
