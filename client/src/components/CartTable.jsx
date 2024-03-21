import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
	decreaseAmountInCart,
	increaseAmountInCart,
	removeFromCart,
} from '../services/CartService';

function CartTable({ products, updateProducts }) {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		updateRows();
	}, [products]);

	function updateRows() {
		const updatedRows = products.map((product) => {
			return {
				title: product.title,
				desc: product.description,
				qty: product.cartRow.amount,
				unit: product.price,
				price: product.cartRow.amount * product.price,
				id: product.id,
			};
		});
		setRows(updatedRows);
	}

	let total = 0;

	if (products.length > 0) {
		for (let i = 0; i < products.length; i++) {
			total += products[i].cartRow.amount * products[i].price;
		}
	}

	const productToSend = {
		userId: 1,
		productId: '',
	};

	const productToDecrease = {
		userId: 1,
		productId: '',
		amount: 0,
	};

	function onRemoveFromCart(id) {
		productToSend.productId = id;

		removeFromCart(productToSend);
		setRows((prevRows) => prevRows.filter((row) => row.id !== id));
		updateProducts();
	}

	async function onIncreaseAmount(id) {
		productToSend.productId = id;
		await increaseAmountInCart(productToSend);
		updateProducts();
	}

	async function onDecreaseAmount(id, amount) {
		productToDecrease.productId = id;
		productToDecrease.amount = amount;
		await decreaseAmountInCart(productToDecrease);
		updateProducts();
	}

	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 700, p: 10 }}
				aria-label="spanning table">
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 'bold' }}>Titel</TableCell>

						<TableCell
							align="right"
							sx={{ textAlign: 'center', fontWeight: 'bold' }}>
							Antal
						</TableCell>
						<TableCell
							align="right"
							sx={{ fontWeight: 'bold' }}>
							Pris
						</TableCell>
						<TableCell
							align="right"
							sx={{ textAlign: 'right', fontWeight: 'bold' }}>
							Summa
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.title}</TableCell>

							<TableCell
								align="right"
								sx={{ textAlign: 'center' }}>
								{row.qty}
								<IconButton
									size="small"
									onClick={() => onIncreaseAmount(row.id)}>
									<AddIcon fontSize="small" />
								</IconButton>
								<IconButton
									size="small"
									onClick={() => onDecreaseAmount(row.id, row.amount)}>
									<RemoveIcon fontSize="small" />
								</IconButton>
							</TableCell>
							<TableCell align="right">{row.unit}</TableCell>
							<TableCell align="right">
								{row.price}
								<IconButton
									size="small"
									onClick={() => {
										onRemoveFromCart(row.id);
									}}>
									<DeleteForeverIcon fontSize="small" />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell
							colSpan={3}
							sx={{ fontWeight: 'bold' }}>
							Total
						</TableCell>

						<TableCell
							align="right"
							sx={{ fontWeight: 'bold' }}>
							<IconButton size="small">
								<AttachMoneyIcon fontSize="small" />
							</IconButton>
							{total}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default CartTable;
