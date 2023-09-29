import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sellers from './components/Sellers/Sellers';
import Trending from './components/Trending/Trending';
import Middle from './components/Middle/Middle';
import Questions from './components/Questions/Questions';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';

function LandingPage() {
	return (
		<div>
			<Navbar />
			<Home />
			<Sellers />

			{/* <Search /> */}
			<Trending />
			{/* <Auction /> */}
			<Middle />
			<Questions />
			<Review />
			<Footer />
		</div>
	);
}

export default LandingPage;
