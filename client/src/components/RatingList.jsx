//import { useState, useEffect } from 'react';
//import { getOne } from '../services/ProductService';
import ReadOnlyRating from '../components/ReadOnlyRating';
//import { useParams } from 'react-router-dom';
import {
	Stack,
	Box,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
	Rating,
} from '@mui/material';
import Paper from '@mui/material/Paper';

function RatingList({ product }) {
	return (
		<>
			{/* <ul>
			{product.ratings?.length > 0 ? (
				product.ratings.map((rating) => (
					<li>
						<ReadOnlyRating
							value={rating.rating}
							name={name}
							readOnly
						/>
					</li>
				))
			) : (
				<h3>Kan ej hämta</h3>
			)}
		</ul> */}

			{/* <TableContainer
				component={Paper}
				sx={{ mt: 5 }}>
				{product.ratings?.length > 0 ? (
					product.ratings.map((rating) => (
						<TableRow>
							<TableCell sx={{ borderBottom: 0 }}>
								<Stack>
									<ReadOnlyRating
										value={rating.rating}
										name={name}
										readOnly
										sx={{ width: 'auto%' }}/>
								</Stack>
							 </TableCell>
						</TableRow>
					))
				) : (
					<h3>Ingen rating gjord </h3>
				)}
			</TableContainer> */}
			<Box sx={{ mt: 5 }}>
				<Typography textAlign={'left'}>Betygz</Typography>
				{product.ratings?.length > 0 ? (
					product.ratings.map((rating) => (
						<Stack
							spacing={2}
							sx={{ mx: 'auto' }}
							//justifyContent="center"
						>
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
