import React from 'react';

import './Middle.css';
import horseReviewer1 from '../../../assets/horseReviewer1.jpg';

function Middle() {
	return (
		<div className="middle section">
			<div className="container secContainer ">
				<div className="flex" style={{ justifyContent: 'center' }}>
					<h3 className="secTitle">Our Latest Winner</h3>
				</div>
				<div className="grid">
					<span className="flex">
						<div className="reviewerImage">
							<img src={horseReviewer1} alt="Reviewer Image" />
						</div>
						<p>Ayesha</p>
					</span>

					<span className="flex">
						<h1>20</h1>
						<p>No of bids</p>
					</span>

					<span className="flex">
						<h1>10</h1>
						<p>Comments</p>
					</span>

					<span className="flex">
						<h1>4.8</h1>
						<p>Overall Rating</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Middle;
