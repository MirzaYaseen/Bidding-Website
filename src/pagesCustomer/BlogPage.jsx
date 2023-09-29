import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import BlogPost from './components/BlogPost/BlogPost';

const BlogPage = () => {
	return (
		<div>
			<Navbar />
			<Home blog />

			<BlogPost />

			<Footer />
		</div>
	);
};

export default BlogPage;
