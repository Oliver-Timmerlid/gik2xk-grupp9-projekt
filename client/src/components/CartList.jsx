import { getCart } from '../services/UserService';
import { useEffect, useState } from 'react';
import CartRow from './CartRow';

function CartList({ pathname }) {
	const [userId, setUserId] = useState(3);
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		getCart(userId).then((products) => setProducts(products.products));
	}, [pathname]);
	//console.log(products);

	useEffect(() => {
		getCart(userId).then((cart) => setCart(cart));
	}, [pathname]);
	//console.log(cart);
	// console.log(products.products);

	return (
		<CartRow
			sx={{ p: 2 }}
			products={products}
			cart={cart}
		/>

		// <ul>
		// 	{products.products?.length > 0 ? (
		// 		products.products.map((product) => (
		// 			<li key={`products_${product.id}`}>
		// 				<CartRow product={product} />
		// 			</li>
		// 		))
		// 	) : (
		// 		<h3>Kunde ej hämta. Blä</h3>
		// 	)}
		// </ul>
	);
}

export default CartList;
