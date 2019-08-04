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
		<li>An occasional <AnimatedLink className="text-white" to="/designer">designer</AnimatedLink>.</li>
		<li>An average <AnimatedLink className="text-white" to="/artist">artist</AnimatedLink>.</li>
		<li>An experienced <AnimatedLink className="text-white" to="/manager">manager</AnimatedLink>.</li>
		<li>A budding <AnimatedLink className="text-white" to="/musician">musician</AnimatedLink>.</li>
		<li>And a simple <AnimatedLink className="text-white" to="/hobbyist">hobbyist</AnimatedLink>.</li>
	</ul>
  </Layout>
)

export default HomePage