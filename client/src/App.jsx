import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from '@mui/material';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed">
					<Toolbar style={{ justifyContent: 'space-between' }}>
						{/* <IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton> */}
						<div>
							<Typography
								variant="h6"
								component="div"
								sx={{ flexGrow: 1, textAlign: 'left' }}>
								Jerrys shop
							</Typography>
						</div>
						<div>
							<Button color="inherit">
								<Link to="/products">Produkter</Link>
							</Button>
							<Button color="inherit">
								<Link to="/users/:id/getCart">Kundvagn</Link>
							</Button>

							<Button color="inherit">Mikael</Button>
							<Button color="inherit">Elin</Button>
							<Button color="inherit">Oliver</Button>
							<Button color="inherit">Robin</Button>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
			<Outlet />
		</>
	);
}

export default App;
