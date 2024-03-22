import ProductItemSmall from './ProductItemSmall';
import { getAll } from '../services/ProductService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

function ProductList({ pathname }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAll(pathname).then((products) => {
			setProducts(products);
		});
	}, [pathname]);

	return (
		<Grid
			container
			spacing={2}>
			{products?.length > 0 ? (
				products.map((product) => (
					<Grid
						item
						xs={12}
						md={4}>
						<Link to={`/products/${product.id}`}>
							<ProductItemSmall
								key={`products_${product.id}`}
								product={product}
							/>
						</Link>
					</Grid>
				))
			) : (
				<h3>Kunde inte hämta blommor</h3>
			)}
		</Grid>
	);
}

export default ProductList;
