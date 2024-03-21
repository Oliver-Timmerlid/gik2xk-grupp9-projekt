import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="fixed"
					sx={{ bgcolor: `${blueGrey[400]}` }}>
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
							<Button
								startIcon={<HomeIcon />}
								color="inherit">
								<Link
									to="/"
									className="link">
									Hem
								</Link>
							</Button>
						</div>
						<div>
							<Button
								startIcon={<ShoppingCartIcon />}
								color="inherit">
								<Link
									to="/users/1/getCart"
									className="link">
									Kundvagn
								</Link>
							</Button>
							<Button
								startIcon={<EditIcon />}
								color="inherit">
								<Link
									//FIXA!!
									to="/products/new"
									className="link">
									Skapa ny produkt
								</Link>
							</Button>
							{/* 
							<Button color="inherit">Mikael</Button>
							<Button color="inherit">Elin</Button>

							<Link
								to="https://github.com/Oliver-Timmerlid"
								className="link">
								Oliver
							</Link>

							<Button color="inherit">Robin</Button> */}
						</div>
					</Toolbar>
				</AppBar>
			</Box>
			<Outlet />
		</>
	);
}

export default App;
