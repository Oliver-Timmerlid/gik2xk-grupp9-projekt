import ProductItemLarge from '../components/ProductItemLarge';
import RatingList from '../components/RatingList';
import { Grid } from '@mui/material';
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
			<Grid
				container
				spacing={2}
				// maxWidth="lg"
				sx={{ p: 2 }}
				width="50vw">
				<Grid
					item
					sm={12}
					md={9}>
					<ProductItemLarge product={product} />
				</Grid>
				<Grid
					item
					sm={12}
					md={3}>
					<RatingList product={product} />
				</Grid>
			</Grid>
		</>
	) : (
		<h2>Test2</h2>
	);
}

export default ProductDetail;
