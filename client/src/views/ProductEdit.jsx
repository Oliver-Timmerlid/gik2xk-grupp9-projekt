import { create, getOne, remove, update } from '../services/ProductService';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';

function ProductEdit() {
	const { id } = useParams();
	const navigate = useNavigate();
	const emptyProduct = {
		id: 0,
		title: '',
		description: '',
		imageUrl: '',
	};

	const [product, setProduct] = useState(emptyProduct);

	useEffect(() => {
		if (id) {
			getOne(id).then((product) => setProduct(product));
		} else {
			setProduct(emptyProduct);
		}
	}, [id]);

	function onChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		const newProduct = { ...product, [name]: value };
		setProduct(newProduct);
	}

	function onSave() {
		if (product.id === 0) {
			create(product).then((response) => {
				navigate('/', {
					replace: true,
					state: { message: `Inlägget ${response.title} skapades.` },
				});
			});
		} else {
			update(product).then((response) =>
				navigate(`/products/${product.id}`, { replace: true, state: response })
			);
		}
	}

	function onDelete() {
		remove(product.id).then((response) =>
			navigate('/', { replace: true, state: response })
		);
	}

	return (
		<>
			<form>
				<Box sx={{ mt: 10, pb: 2 }}>
					<TextField
						name="title"
						onChange={onChange}
						value={product.title}
						id="title"
						label="Titel"
						fullWidth
						variant="outlined"
						color="text"
						focused
						placeholder="Ange titel"
						sx={{ bgcolor: `${grey[300]}` }}
					/>
				</Box>

				<Box sx={{ pb: 2 }}>
					<TextField
						onChange={onChange}
						value={product.description}
						multiline
						minRows={5}
						name="description"
						id="description"
						label="Beskrivning"
						fullWidth
						variant="outlined"
						color="text"
						focused
						placeholder="Ange beskrivning "
						sx={{ bgcolor: `${grey[300]}` }}
					/>
				</Box>
				<Box sx={{ pb: 2 }}>
					<TextField
						value={product.imageUrl}
						onChange={onChange}
						name="imageUrl"
						id="imageUrl"
						label="Sökväg till bild"
						fullWidth
						variant="outlined"
						color="text"
						focused
						placeholder="Ange din bildURL"
						sx={{ bgcolor: `${grey[300]}` }}
					/>
				</Box>

				<Box sx={{ pb: 2 }}>
					<TextField
						value={product.price}
						onChange={onChange}
						name="price"
						id="price"
						label="Pris"
						fullWidth
						variant="outlined"
						color="text"
						focused
						placeholder="Ange ditt pris"
						sx={{ bgcolor: `${grey[300]}` }}
					/>
				</Box>
				<Box
					sx={{ mt: 2 }}
					display="flex"
					gap={2}>
					<Button
						variant="contained"
						onClick={() => navigate(-1)}>
						<ChevronLeftIcon />
						Tillbaka
					</Button>
					{id && (
						<Button
							onClick={onDelete}
							variant="contained"
							color="error">
							Ta bort
							<DeleteIcon />
						</Button>
					)}
					<Button
						onClick={onSave}
						variant="contained"
						color="success">
						Spara
						<SaveIcon />
					</Button>
				</Box>
			</form>
		</>
	);
}

export default ProductEdit;
