import * as React from 'react';
import { Typography } from '@mui/material';

function CartHeader({ userId }) {
	return (
		<div>
			<Typography
				variant="h4"
				gutterBottom>
				Kundvagn tillhörande användare: {userId}
			</Typography>
		</div>
	);
}

export default CartHeader;
