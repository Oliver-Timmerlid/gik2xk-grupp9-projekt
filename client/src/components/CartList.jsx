import { getCart } from '../services/UserService';
import { useEffect, useState } from 'react';
import CartRow from './CartRow';
import { Box } from '@mui/material';

function CartList({ pathname }) {
	const [userId, setUserId] = useState(1);
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		getCart(userId).then((cart) => {
			setCart(cart);
			setProducts(cart.products);
		});
	}, [pathname]);

	return (
		<Box sx={{ p: 2, mt: 5 }}>
			<CartRow
				products={products}
				cart={cart}
			/>
		</Box>
	);
}

export default CartList;
