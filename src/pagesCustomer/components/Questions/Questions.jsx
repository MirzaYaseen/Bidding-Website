import React, { useState } from 'react';

import './Questions.css';
import Accordian from './Accordian';

function Questions() {
	const [active, setActive] = useState(
		'How do I choose the right travel destination for me?'
	);

	return (
		<div className="questions section container">
			<div className="secHeading">
				<h3>Frequently Asked Questions</h3>
			</div>
			<div className="secContainer grid">
				<div className="accordian grid">
					<Accordian
						title="How do I choose the right travel destination for me?"
						description="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destination that align with your preferences and offer activities t=you find appealing"
						active={active}
						onActive={setActive}
					/>
					<Accordian
						title="What are the best times to visit specific destinations?"
						description="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destination that align with your preferences and offer activities t=you find appealing"
						active={active}
						onActive={setActive}
					/>
					<Accordian
						title="How can I find budget-friendly travel options and deals?"
						description="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destination that align with your preferences and offer activities t=you find appealing"
						active={active}
						onActive={setActive}
					/>
					<Accordian
						title="What essential items should i pack for my advernture?"
						description="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destination that align with your preferences and offer activities t=you find appealing"
						active={active}
						onActive={setActive}
					/>
				</div>

				<div className="form">
					<div className="secHeading">
						<h4>Do You Have Any Specific Question?</h4>
						<p>
							Please fill the form below and aur dedicated team will get in
							touch with you as soon as possible.
						</p>
					</div>
					<div className="formContent grid">
						<input type="email" placeholder="Enter Your Email Address" />
						<textarea placeholder="Enter Your Question Here" />
						<button className="btn primaryBtn"> Submit Inquiry</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Questions;
