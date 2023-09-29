import React from 'react';

import './Review.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import reviewHorse1 from '../../../assets/reviewHorse1.jpg';
import reviewHorse2 from '../../../assets/reviewHorse2.jpg';
import reviewHorse3 from '../../../assets/reviewHorse3.jpg';
import horseReviewer1 from '../../../assets/horseReviewer1.jpg';
import horseReviewer2 from '../../../assets/horseReviewer2.jpg';
import horseReviewer3 from '../../../assets/horseReviewer3.jpg';
import { AiFillStar } from 'react-icons/ai';

const reviews = [
	{
		reviewTitle: 'Local Bid',
		description:
			'Horses are majestic creatures, embodying grace and power in every stride. Watching them gallop freely across the open fields is a sight that never fails to fill my heart',
		rating: '4.2',
		horseImage: reviewHorse1,
		name: 'Ayesha',
		reviewerImage: horseReviewer1,
	},
	{
		reviewTitle: 'Arabian',
		description:
			'There is something truly therapeutic about spending time with horses. Their gentle nature and soulful eyes create a unique connection that can heal the spirit',
		rating: '4.7',
		horseImage: reviewHorse2,
		name: 'John Alexer',
		reviewerImage: horseReviewer2,
	},
	{
		reviewTitle: 'Shetland Pony',
		description:
			'Horses have been our companions for centuries, serving as trusted partners in work and play. Their loyalty, intelligence, and beauty continue to captivate our hearts, ',
		rating: '4.5',
		horseImage: reviewHorse3,
		name: 'Usman',
		reviewerImage: horseReviewer3,
	},
];

function Review() {
	return (
		<div className="review section">
			<div className="secContainer container">
				<div className="secHeading flex">
					<h3 className="secTitle">Recent Reviews</h3>
					<div className="navBtns flex">
						<BsArrowLeftShort className="icon leftIcon" />
						<BsArrowRightShort className="icon rightIcon" />
					</div>
				</div>

				<div className="reviewContainer grid">
					{reviews.map((review) => (
						<div className="singleReview grid" key={review.reviewTitle}>
							<div className="imgDiv">
								<img src={review.horseImage} alt="Horse Image" />
							</div>
							<div className="reviewContent">
								<h5 className="reviewTitle">{review.reviewTitle}</h5>
								<span className="desc">{review.description}</span>
								<div className="reviewerDiv flex">
									<div className="leftDiv flex">
										<div className="reviewerImage">
											<img src={review.reviewerImage} alt="Reviewer Image" />
										</div>
										<div className="aboutReviewer">
											<span className="name">{review.name}</span>
											<p>Bidder</p>
										</div>
									</div>
									<div className="rightDiv flex">
										<AiFillStar className="icon" />
										<blockquote>{review.rating}</blockquote>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Review;
