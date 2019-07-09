import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"

const HomePage = () => (
  <Layout>
	<div className="container mx-auto px-4 md:p-10 lg:p-16">
		<h1 className="text-4xl">Hello.</h1>
		<h2 className="text-2xl">I'm Dan Farrow.</h2>
		<ul>
			<li>A <AnimatedLink className="" to="/">WordPress developer</AnimatedLink>.</li>
			<li>A front-end developer.</li>
			<li>An occasional designer.</li>
			<li>An average artist.</li>
			<li>An experienced manager.</li>
			<li>A budding musician.</li>
			<li>And other things.</li>
		</ul>
	</div>
  </Layout>
)

export default HomePage