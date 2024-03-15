import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductItemSmall({ product }) {
	return (
		<>
			<CardContent>
				<Typography
					variant="h5"
					component="div">
					{product.title}
				</Typography>
				<Typography
					sx={{ mb: 1.5 }}
					color="text.secondary">
					{product.price}
				</Typography>
				<Typography variant="body2">
					TEXT OM PRODUKTEN BRRRRRRRRRRRRRRR
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">
					<Link to={`/products/${product.id}`}>Learn More</Link>
				</Button>
			</CardActions>
		</>
	);
}

export default ProductItemSmall;
