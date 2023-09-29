import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './BlogPost.css';
import blogImage1 from '../../../assets/blog1.jpg';
import blogImage2 from '../../../assets/blog2.jpg';
import blogImage3 from '../../../assets/blog3.jpg';
import blogImage4 from '../../../assets/blog4.jpg';
import blogImage5 from '../../../assets/blog5.jpg';
import blogImage6 from '../../../assets/blog6.jpg';
import { BiCalendar } from 'react-icons/bi';
import ExpandableText from '../ExpandableText';

const reviews = [
	{
		reviewTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		description:
			'Horses are majestic creatures, embodying grace and power in every stride. Watching them gallop freely across the open fields is a sight that never fails to fill my heart',
		blogImage: blogImage1,
	},
	{
		reviewTitle: 'Lorem ipsum dolor sit amet usjsma adipisicing elit.',
		description:
			'There is something truly therapeutic about spending time with horses. Their gentle nature and soulful eyes create a unique connection that can heal the spirit',
		blogImage: blogImage2,
	},
	{
		reviewTitle: 'Lorem ipsum dolor sit amet uthdis adipisicing elit.',
		description:
			'Horses have been our companions for centuries, serving as trusted partners in work and play. Their loyalty, intelligence, and beauty continue to captivate our hearts, ',
		blogImage: blogImage3,
	},
	{
		reviewTitle: 'Lorem ipsufm dolor sit amet consectetur adipisicing elit.',
		description:
			'Horses are majestic creatures, embodying grace and power in every stride. Watching them gallop freely across the open fields is a sight that never fails to fill my heart',
		blogImage: blogImage4,
	},
	{
		reviewTitle: 'Lorem ipsusam dolor sit amet usjsma adipisicing elit.',
		description:
			'There is something truly therapeutic about spending time with horses. Their gentle nature and soulful eyes create a unique connection that can heal the spirit',
		blogImage: blogImage5,
	},
	{
		reviewTitle: 'Lorem ipsusm dolor sit amet uthdis adipisicing elit.',
		description:
			'Horses have been our companions for centuries, serving as trusted partners in work and play. Their loyalty, intelligence, and beauty continue to captivate our hearts, ',
		blogImage: blogImage6,
	},
];

function BlogPost() {
	return (
		<div className="blogPost section">
			<div className="secContainer container">
				<div className="blogContainer grid">
					{reviews.map((review) => (
						<div className="singleBlog grid" key={review.reviewTitle}>
							<div className="imgDiv">
								<img src={review.blogImage} alt="Horse Image" />
							</div>
							<div className="blogContent">
								<div className="dateBox flex">
									<BiCalendar />
									<p className="date"> 2020=02-26 11:21 AM</p>
								</div>
								<h5 className="blogTitle">{review.reviewTitle}</h5>
								<ExpandableText>{review.description}</ExpandableText>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogPost;
