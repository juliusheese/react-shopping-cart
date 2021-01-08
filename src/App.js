import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext.js'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log(item);
		console.log(cart);
		console.log(products);
		setCart(cart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
