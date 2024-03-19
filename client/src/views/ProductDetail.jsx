import ProductItemLarge from '../components/ProductItemLarge';
import { Box, Container } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOne } from '../services/ProductService';

function ProductDetail() {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		getOne(id).then((product) => setProduct(product));
	}, [id]);

	const navigate = useNavigate();

	return product ? (
		<>
			<Container
				maxWidth="lg"
				sx={{ p: 2 }}>
				<ProductItemLarge product={product} />
			</Container>
		</>
	) : (
		<h2>Test2</h2>
	);
}

export default ProductDetail;
