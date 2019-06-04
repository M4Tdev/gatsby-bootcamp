import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'

const AboutPage = () => {
	return (
		<Layout>
			<h1>About Me</h1>
			<p>I'm Mateusz a self-thought Front-End Developer living in Warsaw, Poland.</p>
			<p><Link to="/contact">Want to work with me? Reach out.</Link></p>
		</Layout>
	);
};

export default AboutPage;