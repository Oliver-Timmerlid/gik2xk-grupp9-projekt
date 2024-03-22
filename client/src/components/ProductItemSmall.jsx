import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ProductItemSmall.css';
import ReadOnlyRating from './ReadOnlyRating';
import { CardMedia } from '@mui/material';
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
				className="zoom">
				<CardContent>
					<Typography
						variant="h5"
						component="div">
						{product.title}
					</Typography>

					<CardMedia
						height="256"
						component="img"
						image={product.imageUrl}
					/>

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
					<ReadOnlyRating
						value={ratingsValue}
						name={name}
						readOnly
					/>
				</CardActions>
			</Card>
		</>
	);
}

export default ProductItemSmall;
