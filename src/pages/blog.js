import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout'

const BlogPage = () => {

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on.</p>
			<ol>
				{data.allMarkdownRemark.edges.map(post => {
					return (
						<li key={post.node.frontmatter.title}>
							<Link to={`/blog/${post.node.fields.slug}`}>
								<h2>{post.node.frontmatter.title}</h2>
								<p>{post.node.frontmatter.date}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;