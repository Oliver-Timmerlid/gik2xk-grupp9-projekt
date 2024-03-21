import ProductList from '../components/ProductList';
import Typography from '@mui/material/Typography';
import '../App.css';

function Home() {
	return (
		<>
			<Typography
				variant="h1"
				gutterBottom
				sx={{ p: 5 }}
				className="animate">
				Mike`s Blomsterhandel
			</Typography>
			<ProductList />
		</>
	);
}

export default Home;
