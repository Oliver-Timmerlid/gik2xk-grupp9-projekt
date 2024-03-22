import { Stack, Box, Typography, Rating } from '@mui/material';

function RatingList({ product }) {
	return (
		<>
			<Box sx={{ mt: 5 }}>
				<Typography textAlign={'left'}>Betygz</Typography>
				{product.ratings?.length > 0 ? (
					product.ratings.map((rating) => (
						<Stack
							spacing={2}
							sx={{ mx: 'auto' }}>
							<Rating
								value={rating.rating}
								size="small"
								readOnly
							/>
						</Stack>
					))
				) : (
					<h3>Ingen rating gjord </h3>
				)}
			</Box>
		</>
	);
}

export default RatingList;
