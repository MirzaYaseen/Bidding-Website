import React from 'react';

import './Home.css';
import homeImage from '../../../assets/homeImage.png';
import aboutHorse from '../../../assets/aboutHorse.png';
import blogHorse from '../../../assets/blogHorse.png';
import productHorse from '../../../assets/productsHorse.png';
import contactHorse from '../../../assets/contactHorse.png';

function Home({ about, blog, product, contact }) {
	const image = about
		? aboutHorse
		: blog
		? blogHorse
		: contact
		? contactHorse
		: product
		? productHorse
		: homeImage;

	return (
		<div className="home">
			<div className="secContainer">
				<div className="homeText flex">
					<span className="homeSpan">Meet The Horse Up For Bidding Now!</span>
					<h1 className="homeTitle">Arabian Horse</h1>
					<div className="btns flex">
						<button className="btn">More Details</button>
						<button className="btn primaryBtn">Test Ride</button>
					</div>
				</div>
			</div>
			<div className="homeImage">
				<img src={image} alt="Home Image" />
			</div>
		</div>
	);
}

export default Home;
