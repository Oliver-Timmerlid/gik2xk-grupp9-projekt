import { Link } from 'react-router-dom';
import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductItemSmall({ product }) {
	return (
		<>
			<Card
				variant="outlined"
				sx={{ mb: 4 }}>
				<CardContent>
					<Typography
						variant="h5"
						component="div">
						{product.title}
					</Typography>
					<Typography
						variant="body2"
						sx={{ textAlign: 'left' }}>
						BILD
					</Typography>
					<Typography
						variant="body2"
						sx={{ textAlign: 'left' }}>
						TEXT OM PRODUKTEN BRRRRRRRRRRRRRRR
					</Typography>
					<Typography
						sx={{ mb: 1.5, textAlign: 'left' }}
						color="text.secondary">
						Pris: {product.price}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<Link to={`/products/${product.id}`}>Learn More</Link>
					</Button>
				</CardActions>
			</Card>
		</>
	);
}

export default ProductItemSmall;
