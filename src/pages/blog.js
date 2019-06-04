import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout'
import styles from './blog.module.scss';

const BlogPage = () => {

	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost (
				sort: {
					fields: publishedDate,
					order: DESC
				}
			) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on.</p>
			<ol className={styles.posts}>
				{data.allContentfulBlogPost.edges.map(post => {
					return (
						<li  className={styles.post} key={post.node.title}>
							<Link to={`/blog/${post.node.slug}`}>
								<h2>{post.node.title}</h2>
								<p>{post.node.publishedDate}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;