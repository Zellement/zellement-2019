import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const HomePage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Artist</p>
		<h1 className="text-5xl text-grey-light mb-8">Artist.</h1>
		<p className="py-3 text-lg"></p>
		<p className="pb-3 text-md"></p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Artwork</h2>

	</div>

  </Layout>
)

export default HomePage