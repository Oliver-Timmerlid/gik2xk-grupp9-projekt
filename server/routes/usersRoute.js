const router = require('express').Router();
const userService = require('../services/userService');

// klar
router.get('/', (req, res) => {
	userService.getAll().then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar, hämta kundvagn för en user
router.get('/:id/getCart', (req, res) => {
	const id = req.params.id;
	userService.getCart(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.post('/', (req, res) => {
	const user = req.body;
	userService.create(user).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.put('/', (req, res) => {
	const user = req.body;
	userService.update(user).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.delete('/', (req, res) => {
	const id = req.body.id;
	userService.destroy(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

module.exports = router;
