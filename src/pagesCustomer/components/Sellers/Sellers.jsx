import React from 'react';

import './Sellers.css';
import currentAuction from '../../../assets/auctionCurrent.jpg';
import upcomingAuction from '../../../assets/auctionUpcoming.jpg';

function Sellers() {
	return (
		<div className="sellers section">
			<div className="secContainer container">
				<div className="secHeading grid">
					<h3 className="secTitle">Explore the Bids around</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						eum atque rem officiis debitis expedita perspiciatis culpa. Ut
						itaque, quisquam impedit hic a corrupti modi accusantium.
					</p>
				</div>

				<div className="sellerContainer grid">
					<div className="singleSeller flex">
						<div className="imgDiv flex">
							<img src={currentAuction} />
						</div>
						<span className="info">
							<h4 className="name">Current Auctions</h4>
							<p>Starting from $40K</p>
						</span>
					</div>
					<div className="singleSeller flex">
						<div className="imgDiv flex">
							<img src={upcomingAuction} />
						</div>
						<span className="info">
							<h4 className="name">Upcoming Auctions</h4>
							<p>Starting from $70K</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sellers;
