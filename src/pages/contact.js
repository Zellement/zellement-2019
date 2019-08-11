import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Contact</p>
		<h1 className="text-5xl text-grey-light mb-8">Contact.</h1>
		<p className="py-3 text-lg max-w-3xl">Should you wish to get in touch, please complete the form below and I'll come back to you as soon as possible.</p>

		<ContactForm />

	</div>

  </Layout>
)

export default ContactPage