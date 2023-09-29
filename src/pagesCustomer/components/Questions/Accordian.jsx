import React from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

function Accordian({ title, description, active, onActive }) {
	return (
		<div className="accordianContainer">
			<span
				className={(active === title ? 'activeTitle' : '') + ' title flex'}
				onClick={() => onActive(title)}
			>
				{title}
				<span>
					{active === title ? (
						<BsArrowDownCircle className="icon" />
					) : (
						<BsArrowUpCircle className="icon" />
					)}
				</span>
			</span>
			<p className={(active === title ? 'show' : '') + ' description'}>
				{description}
			</p>
		</div>
	);
}

export default Accordian;
