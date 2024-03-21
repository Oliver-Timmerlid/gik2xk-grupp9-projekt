const router = require('express').Router();
const productService = require('../services/productServices');

// klar
router.get('/', (req, res) => {
	productService.getAll().then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.get('/:id', (req, res) => {
	const id = req.params.id;
	productService.getById(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.post('/', (req, res) => {
	const product = req.body;
	productService.create(product).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar, lägga rating på produkt
router.post('/:id/addRating', (req, res) => {
	const rating = req.body;
	const id = req.params.id;

	productService.addRating(id, rating).then((result) => {
		res.status(result.status).json(result.data);
	});
});

//klar,
router.put('/:id/edit', (req, res) => {
	const product = req.body;
	const id = req.params.id;
	productService.update(product, id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

// klar
router.delete('/', (req, res) => {
	const id = req.body.id;
	productService.destroy(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

module.exports = router;
