import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({ value }) {
	return (
		<Rating
			name="half-rating"
			defaultValue={0}
			precision={0.5}
			value={value}
			onChange={(data) => console.log(data.target.value)}
		/>
	);
}
