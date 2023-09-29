import React from 'react';

import './Footer.css';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { GiHorseHead } from 'react-icons/gi';

function Footer() {
	return (
		<div className="footer">
			<div className="container secContainer grid">
				<div className="logoDiv">
					<div className="footerLogo">
						<GiHorseHead className="icon" />
						<span>Horse Auction</span>
					</div>
					<div className="socials flex">
						<ImFacebook className="icon" />
						<BsTwitter className="icon" />
						<AiFillInstagram className="icon" />
					</div>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Information</span>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Explore</a>
					</li>
					<li>
						<a href="#">Travel</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Helpful Links</span>
					<li>
						<a href="#">Destination</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">Travel & Condition</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Contact Details</span>
					<span className="phone">+651 125 658</span>
					<span className="email">horsebidding@outlook.com</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
