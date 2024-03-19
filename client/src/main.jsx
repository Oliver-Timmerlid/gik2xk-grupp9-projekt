import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import ProductEdit from './views/ProductEdit.jsx';
import CartDetail from './views/CartDetail.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import {
	blueGrey,
	deepPurple,
	green,
	grey,
	orange,
	purple,
	red,
	teal,
} from '@mui/material/colors';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				// path: '/products',
				path: '/',
				element: <Home />,
			},
			// {
			// 	path: '/product/:id/',
			// 	element: <ProductEdit />,
			// },
			{
				path: '/products/:id',
				element: <ProductDetail />,
			},
			{
				path: '/users/:id/getCart',
				element: <CartDetail />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{
			/* <ThemeProvider theme={theme}>
			<CssBaseline />*/
			<RouterProvider router={router} />
			// </ThemeProvider>
		}
	</React.StrictMode>
);
