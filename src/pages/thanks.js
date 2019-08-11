import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"

const ThanksPage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Thanks</p>
		<h1 className="text-5xl text-grey-light mb-8">Thanks.</h1>
		<p className="py-3 text-lg max-w-3xl">Thanks for getting in touch! I'll come back to you.</p>

	</div>

  </Layout>
)

export default ThanksPage