import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductFilter from './components/ProductFilter/ProductFilter';

const ProductsPage = () => {
	return (
		<div>
			<Navbar />
			<Home product />
			<div className="productsContainer">
				<div
					className="flex"
					style={{ justifyContent: 'space-between', margin: 20 }}
				>
					<ProductFilter />
					<span>Showing Results: 0</span>
					<span>Results Found: 0</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductsPage;
