import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" />
			<h1>About Me</h1>
			<p>I'm Mateusz a self-thought Front-End Developer living in Warsaw, Poland.</p>
			<p><Link to="/contact">Want to work with me? Reach out.</Link></p>
		</Layout>
	);
};

export default AboutPage;