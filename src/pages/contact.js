import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h1>Contact Me</h1>
			<p>
				If you want to <strong>talk</strong> feel free to <strong>catch me</strong> at: <strong>hello@mateuszleisuk.dev</strong>
			</p>
			<p>You can also reach me at <a href="https://twitter.com/M4Tdev" target="_blank" rel="noopener noreferrer">@M4Tdev</a> on Twitter.</p>
		</Layout>
	);
};

export default ContactPage;