import { Link } from 'react-router-dom';
import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductItemSmall.css';
import './Palette.css';
import HalfRating from './HalfRating';
import ReadOnlyRating from './ReadOnlyRating';
import { CardMedia, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { blueGrey } from '@mui/material/colors';

function ProductItemSmall({ product }) {
	let total = 0;

	for (let i = 0; i < product.ratings.length; i++) {
		total += product.ratings[i].rating;
	}

	const ratingsValue = total / product.ratings.length;

	const name = 'half-rating-read';

	return (
		<>
			<Card
				variant="outlined"
				sx={{
					mb: 4,
					height: '100%',
					bgcolor: `${blueGrey[400]}`,
					borderRadius: 7,
					zIndex: 1,
				}}
				//sx={{ height: '50%' }}
				className="zoom">
				<CardContent>
					<Typography
						variant="h5"
						component="div">
						{product.title}
					</Typography>

					<CardMedia
						// sx={{ height: 140 }}
						height="256"
						component="img"
						image={product.imageUrl}
					/>

					{/* <Typography
						variant="body2"
						sx={{ textAlign: 'left' }}>
						{product.description}
					</Typography> */}
					<Typography
						sx={{
							mb: 1.5,
							textAlign: 'left',
							fontSize: 20,
							fontWeight: 'Bold',
						}}
						color="text.secondary">
						Pris: ${product.price}
					</Typography>
				</CardContent>
				<CardActions>
					{/* <Button size="small">
						<Link to={`/products/${product.id}`}>Learn More</Link>
					</Button> */}
					<ReadOnlyRating
						value={ratingsValue}
						name={name}
						readOnly
					/>
				</CardActions>
				{/* <IconButton
					color="primary"
					aria-label="add to shopping cart">
					<AddShoppingCartIcon />
				</IconButton> */}
			</Card>
		</>
	);
}

export default ProductItemSmall;
