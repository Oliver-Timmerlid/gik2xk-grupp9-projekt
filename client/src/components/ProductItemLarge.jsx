import { useState } from 'react';
import {
	Paper,
	Card,
	CardMedia,
	Typography,
	IconButton,
	CardActions,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../services/CartService';
import NumberInputIntroduction from './NumberInputIntroduction';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { addRating } from '../services/ProductService';
import { blueGrey } from '@mui/material/colors';

function ProductItemLarge({ product }) {
	const [amount, setAmount] = useState(0);
	const param = useParams();
	const productToSend = {
		userId: 1,
		productId: '',
		amount: '',
	};
	const ratingToSend = {
		rating: '',
	};

	const input = document.querySelectorAll('input');

	input.forEach((inputElement) => {
		inputElement.addEventListener('blur', (e) => {
			setAmount(inputElement.value);
		});
	});

	//------------------------------------
	// anrop till axios addToCart
	function onAddToCart(product, amount) {
		productToSend.productId = product.id;
		productToSend.amount = amount;

		addToCart(productToSend);
	}
	//------------------------------------

	function onAddRating(rating) {
		ratingToSend.rating = rating;
		addRating(param, rating);
	}

	//------------------------------------
	// räkna rating
	let total = 0;
	for (let i = 0; i < product.ratings.length; i++) {
		total += product.ratings[i].rating;
	}

	const ratingsValue = total / product.ratings.length;

	//------------------------------------

	return (
		<Paper
			sx={{ my: 4, p: 4, borderRadius: 2, bgcolor: `${blueGrey[400]}` }}
			elevation={3}>
			<Card sx={{ bgcolor: `${blueGrey[300]}` }}>
				<Typography variant="h2">{product.title}</Typography>
				<Typography>Pris: {product.price}</Typography>
				<Typography>Produktbeskrivning: {product.description}</Typography>
				<CardMedia
					height="600px"
					width="600px"
					component="img"
					image={product.imageUrl}
				/>
				<NumberInputIntroduction />
				<CardActions sx={{ justifyContent: 'space-between' }}>
					<Rating
						name="half-rating"
						defaultValue={0}
						precision={0.5}
						value={ratingsValue}
						onChange={(data) => onAddRating(data.target.value)}
					/>
					<Link to={`/products/${product.id}/edit`}>
						<EditIcon />
					</Link>
					<IconButton
						color="primary"
						aria-label="add to shopping cart"
						onClick={() => {
							onAddToCart(product, amount);
						}}>
						<AddShoppingCartIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Paper>
	);
}

export default ProductItemLarge;
