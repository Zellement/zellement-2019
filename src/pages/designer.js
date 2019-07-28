import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const HomePage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Designer</p>
		<h1 className="text-5xl text-grey-light mb-8">Designer.</h1>
		<p className="py-3 text-lg">I've been designing websites since the late nineties, when <em>web designer</em> and <em>webmaster</em> were the catch all roles. I have lived through iterations of fixed width, responsive, mobile-first, gradients, no gradients, drop shadows, no drop shadows, gradients again...</p>
		<p className="pb-3 text-md">It's safe to say I've seen a lot of change in the industry as regards design. Although I no longer class myself as a designer, I still dabble occasionally, particularly for freelance.</p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Web Design</h2>

	</div>

  </Layout>
)

export default HomePage