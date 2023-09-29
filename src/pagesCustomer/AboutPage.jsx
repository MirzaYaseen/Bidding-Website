import React from 'react';

import './AboutPage.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import aboutAuction from '../assets/aboutAuction.jpg';

function AboutPage() {
	return (
		<>
			<div>
				<Navbar />
				<Home about />
				<div className="about flex">
					<div className="imageDiv">
						<img src={aboutAuction} style={{ borderRadius: 10 }} />
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						ratione, earum unde mollitia alias reprehenderit voluptas adipisci,
						architecto porro, delectus ipsa iste. Ad, obcaecati aspernatur?
						Earum, nihil eaque natus deserunt vel ratione, distinctio tempora
						quam doloremque reiciendis similique, ex at ipsum sequi maxime minus
						dolorem quibusdam expedita nulla repellendus rerum aspernatur
						incidunt accusantium? Ullam, dignissimos rerum at optio quas, cumque
						ratione id quod laborum, tempore molestiae voluptas similique
						consequatur accusantium reiciendis esse facere! Itaque facere
						voluptate quasi incidunt. Nostrum et, eligendi ipsum ab saepe minima
						temporibus perferendis nihil cupiditate aperiam recusandae nam nulla
						placeat at doloremque reiciendis ad atque quibusdam?
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default AboutPage;
