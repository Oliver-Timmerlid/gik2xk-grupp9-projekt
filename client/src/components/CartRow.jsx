import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from '@mui/material/ButtonGroup';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeFromCart } from '../services/CartService';

function CartRow({ products, cart }) {
	// const [cartTotal, setCartTotal] = useState(0);

	// useEffect(() => {
	// 	total();
	// }, [cartTotal]);

	// function total() {
	// 	let counter = 0;
	// 	for (let i = 0; i < products.length; i++) {
	// 		totalVal += 1;
	// 	}
	// 	setCartTotal(counter);
	// }

	const productToSend = {
		userId: 1,
		productId: '',
	};

	function onRemoveFromCart(id) {
		productToSend.productId = id;

		removeFromCart(productToSend);
		// setCartTotal(cartTotal - 1);
	}

	function priceRow(qty, unit) {
		return qty * unit;
	}

	function createRow(title, desc, qty, unit, id) {
		const price = priceRow(qty, unit);
		return { title, desc, qty, unit, price, id };
	}

	const rows = [];
	let total = 0;

	if (products.length > 0) {
		for (let i = 0; i < products.length; i++) {
			rows[i] = createRow(
				products[i].title,
				products[i].description,
				products[i].cartRow.amount,
				products[i].price,
				products[i].id
			);

			total = total + rows[i].price;
		}
	}

	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 700, p: 10 }}
				aria-label="spanning table">
				<TableHead>
					{/* <TableRow>
						<TableCell
							align="center"
							colSpan={3}>
							Details
						</TableCell>
						<TableCell align="right">Price</TableCell>
					</TableRow> */}
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell align="right">Desc</TableCell>
						<TableCell
							align="right"
							sx={{ textAlign: 'center' }}>
							Amount
						</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell
							align="right"
							sx={{ textAlign: 'center' }}>
							Sum
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.desc}>
							<TableCell>{row.title}</TableCell>
							<TableCell align="right">{row.desc}</TableCell>
							<TableCell align="right">
								{row.qty}
								<IconButton size="small">
									<AddIcon fontSize="small" />
								</IconButton>
								<IconButton size="small">
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
					{/* <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
              </TableRow> */}
					{/* <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow> */}
					<TableRow>
						<TableCell colSpan={4}>Total</TableCell>

						<TableCell align="right">
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

export default CartRow;
