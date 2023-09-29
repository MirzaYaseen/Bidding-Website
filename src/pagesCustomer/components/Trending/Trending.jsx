import React from 'react';

import './Trending.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import horse1 from '../../../assets/horse1.jpg';
import horse2 from '../../../assets/horse2.jpg';
import horse3 from '../../../assets/horse3.jpg';
import horse4 from '../../../assets/horse4.jpg';
import horse5 from '../../../assets/horse5.jpg';
import horse6 from '../../../assets/horse6.jpg';
import horse7 from '../../../assets/horse7.jpg';
import horse8 from '../../../assets/horse8.jpg';
import horse9 from '../../../assets/horse9.jpg';

const horses = [
	{
		name: 'Andalusian',
		speed: '20-30mph',
		description: 'Andalusians are known for their elegance and are often ',
		price: '$10000',
		image: horse1,
	},
	{
		name: 'Thoroughbred',
		speed: '40-45mph',
		description: 'Renowned for their speed and agility, often used in horse',
		price: '$15000',
		image: horse2,
	},
	{
		name: 'Clydesdale',
		speed: '20-25mph',
		description: 'Large draft horses known for their strength & temperament',
		price: '$30000',
		image: horse3,
	},
	{
		name: 'Arabian',
		speed: '30-35mph',
		description: 'Prized for their endurance, elegant appearance    ',
		price: '$50000',
		image: horse4,
	},
	{
		name: 'Friesian',
		speed: '30-35mph',
		description: 'Quarter Horses are versatile and excel in sprinting',
		price: '$30000',
		image: horse9,
	},
	{
		name: 'Shetland Pony',
		speed: '5-10mph',
		description: 'Shetland Pony orses are versatile, its too beautiful',
		price: '$5000',
		image: horse6,
	},
	{
		name: 'Thoroughbreds',
		speed: '40-45mph',
		description: 'Renowned for their speed and agility, often used in racing.',
		price: '$15000',
		image: horse7,
	},
	{
		name: 'Clydesdalex',
		speed: '20-25mph',
		description: 'Large draft horses known for their strength & temperament',
		price: '$30000',
		image: horse8,
	},
	{
		name: 'Andalusianx',
		speed: '20-30mph',
		description: 'Andalusians are known for their elegance coolness etc',
		price: '$10000',
		image: horse5,
	},
];

function Trending() {
	return (
		<div className="trending section">
			<div className="container secContainer">
				<div className="secHeading flex">
					<h3 className="secTitle">Expired Auctions</h3>
					<div className="navBtns flex">
						<BsArrowLeftShort className="icon leftIcon" />
						<BsArrowRightShort className="icon rightIcon" />
					</div>
				</div>

				<div className="carContainer grid">
					{horses.map((horse) => (
						<div key={horse.name} className="carContainer">
							<div className="singleCar grid">
								<div className="imgDiv">
									<img src={horse.image} alt="Horse Image" />
								</div>
								<h5 className="carTitle">{horse.name}</h5>
								<span className="miles">{horse.speed}</span>
								<span className="AWD">{horse.description}</span>
								<div className="price_seller flex">
									<span className="price">{horse.price}</span>
									<span className="seller">Best Seller</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Trending;
