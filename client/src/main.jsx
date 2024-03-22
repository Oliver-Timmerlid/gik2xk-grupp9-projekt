import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductEdit from './views/ProductEdit.jsx';
import CartDetail from './views/CartDetail.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products/new',
				element: <ProductEdit />,
			},
			{
				path: '/products/:id/edit',
				element: <ProductEdit />,
			},
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
	<React.StrictMode>{<RouterProvider router={router} />}</React.StrictMode>
);
