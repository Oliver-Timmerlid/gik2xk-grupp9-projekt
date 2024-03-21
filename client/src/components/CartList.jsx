import { getCart } from '../services/UserService';
import { useEffect, useState } from 'react';
import CartTable from './CartTable';
import { Box, Container } from '@mui/material';
import CartHeader from './CartHeader';

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

	const updateProducts = async () => {
		const updatedCart = await getCart(userId);
		setProducts(updatedCart.products);
	};

	return (
		<>
			<Box>
				<Box
					sx={{
						p: 2,
						mt: 5,
						mb: 2,
						bgcolor: 'background.paper',
						color: 'text.primary',
						borderRadius: 2,
					}}>
					<CartHeader userId={userId} />
				</Box>
				{/* <Box sx={{ p: 2, mt: 5 }}> */}
				<CartTable
					products={products}
					updateProducts={updateProducts}
				/>
				{/* </Box> */}
			</Box>
		</>
	);
}

export default CartList;
