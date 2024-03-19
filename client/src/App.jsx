import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
							<Button
								startIcon={<HomeIcon />}
								color="inherit">
								<Link
									to="/"
									className="link">
									Home
								</Link>
							</Button>
							<Button
								startIcon={<ShoppingCartIcon />}
								color="inherit">
								<Link
									to="/users/3/getCart"
									className="link">
									Kundvagn
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
