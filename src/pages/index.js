import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"

const HomePage = () => (
  <Layout>
	<h1 className="text-6xl text-grey-light leading-none">Hello.</h1>
	<h2 className="text-3xl text-grey-light leading-none mb-8">I'm Dan Farrow.</h2>
	<ul>
		<li>A <AnimatedLink className="text-white" to="/developer">WordPress developer</AnimatedLink>.</li>
		<li>A <AnimatedLink className="text-white" to="/developer">front-end developer</AnimatedLink>.</li>
		<li>An occasional designer.</li>
		<li>An average artist.</li>
		<li>An experienced manager.</li>
		<li>A budding musician.</li>
		<li>And other things.</li>
	</ul>
  </Layout>
)

export default HomePage