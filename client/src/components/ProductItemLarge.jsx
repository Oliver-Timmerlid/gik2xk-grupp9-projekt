import { useState } from 'react';
import {
	Paper,
	Card,
	CardMedia,
	CardHeader,
	Typography,
	Box,
	IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../services/CartService';
import HalfRating from './HalfRating';
import axios from 'axios';
import NumberInputIntroduction from './NumberInputIntroduction';
import { unstable_useNumberInput as useNumberInput } from '@mui/base/unstable_useNumberInput';
import NumberInput from './NumberInput';

function ProductItemLarge({ product }) {
	const [amount, setAmount] = useState(0);
	// const [userId, setUserId] = useState(3);

	const user = {
		userId: 3,
	};

	const productToSend = {
		userId: 3,
		productId: '',
		amount: '',
	};

	const input = document.querySelectorAll('input');

	input.forEach((inputElement) => {
		inputElement.addEventListener('blur', (e) => {
			setAmount(inputElement.value);
		});
	});

	// console.log(userId);
	//------------------------------------
	// anrop till axios addToCart
	function onAddToCart(product, amount) {
		productToSend.productId = product.id;
		productToSend.amount = amount;

		// console.log(productToSend);
		addToCart(productToSend);
		console.log('great success');
	}

	//------------------------------------

	//------------------------------------
	// räkna rating
	let total = 0;
	for (let i = 0; i < product.ratings.length; i++) {
		total += product.ratings[i].rating;
		// console.log(product.title + '   ' + product.ratings[i].rating);
	}
	// console.log(product);
	// console.log(product.ratings.length);
	const ratingsValue = total / product.ratings.length;
	// console.log(product.title + ' avg: ' + ratingsValue);
	//------------------------------------

	return (
		// stor vy av produkt?
		// rating komp under?
		// knappar för lägg i korg, ändra produkt?
		// lista av rating?

		<Paper
			sx={{ my: 4, p: 4, borderRadius: 2 }}
			elevation={3}>
			<Card>
				<Typography variant="h2">{product.title}</Typography>
				<Typography>Pris: {product.price}</Typography>
				<Typography>Produktbeskrivning: {product.description}</Typography>
				<CardMedia
					component="img"
					image={product.imageUrl}
				/>
				<NumberInputIntroduction
				// 	blur={(event, newValue) =>
				// 	console.log(`${event.type} event: the new value is ${newValue}`)
				// }
				/>
				{/* <NumberInput
					aria-label="Demo number input"
					placeholder="Type a number…"
					value={value}
					onChange={(event, val) => setValue(val)}
				/> */}
				<IconButton
					color="primary"
					aria-label="add to shopping cart"
					onClick={() => {
						// const input = document.querySelectorAll('input');
						// setAmount(input[0].value);

						onAddToCart(product, amount);
					}}>
					<AddShoppingCartIcon />
				</IconButton>

				<HalfRating
					value={ratingsValue}
					onChange={(event, newValue) => {
						// använda newValue för att skicka rating till produkt
						// setValue(newValue);
					}}
				/>
			</Card>
		</Paper>
	);
}

export default ProductItemLarge;
