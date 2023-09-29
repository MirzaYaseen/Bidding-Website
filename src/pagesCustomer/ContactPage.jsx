import React from 'react';

import './ContactPage.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import { ImLocation } from 'react-icons/im';
import { BiEnvelope } from 'react-icons/bi';
import { PiPhone } from 'react-icons/pi';

const ContactPage = () => {
	return (
		<div>
			<Navbar />
			<Home contact />

			<Questions />
			<GetInTouch />
			<Footer />
		</div>
	);
};

export default ContactPage;

const GetInTouch = () => {
	return (
		<div className="getInTouch section container">
			<div>
				<h3>Get In Touch With Us</h3>
				<p>detailed Address</p>
				<h5 className="moreInfo">More Information</h5>
			</div>

			<div className="flex ">
				<div className="iconBox">
					<ImLocation />
				</div>
				<p>Address</p>
			</div>

			<div className="flex">
				<div className="iconBox">
					<BiEnvelope />
				</div>
				<p>Email</p>
			</div>

			<div className="flex">
				<div className="iconBox">
					<PiPhone />
				</div>
				<p>Phone</p>
			</div>
		</div>
	);
};
