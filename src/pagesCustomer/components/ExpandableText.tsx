import React, { useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';

function ExpandableText({ children }) {
	const [expanded, setExpanded] = useState(false);
	const limit = 100;

	if (!children) return null;

	if (children.length <= limit) return <p className="desc">{children}</p>;

	const summary = expanded ? children : children.substring(0, limit) + '...   ';
	return (
		<p className="desc">
			{summary}
			<button className="btn flex" onClick={() => setExpanded(!expanded)}>
				<span className="seeMore">{expanded ? 'Show Less' : 'Read More'}</span>
				<AiOutlineLine />
			</button>
		</p>
	);
}

export default ExpandableText;
