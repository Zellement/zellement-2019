import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import IconWordPress from "../svgs/wordpress.svg";
import IconGatsbyJS from "../svgs/gatsbyjs.svg";
import IconSass from "../svgs/sass.svg";

const HomePage = () => (
  <Layout>
  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Developer</p>
		<h1 className="text-5xl text-grey-light mb-8">Developer.</h1>
		<p className="py-3 text-lg">I have over {new Date().getFullYear() - 2007} years of experience working in a leading digital marketing and web design company based in Nottingham, UK, and I've been lucky to have the chance to work on a multitude of languages, platforms and frameworks.</p>
		<p className="pb-3 text-md">In recent years, I have worked predominantly with WordPress, but I have been learning new technologies lately to continue to improve my knowledge.</p>
	</div>

		<div className="flex items-stretch w-100 justify-between">
			<div>
				<h3 className="text-2xl mt-5">Sheringham Shantymen</h3>
				<p><a href="https://www.shantymen.com">www.shantymen.com</a></p>
			</div>

			<div className="align-right">
				<div className="flex pt-8">
					<IconWordPress className="icons"/>
					<IconGatsbyJS className="fill-current icons"/>
					<IconSass className="fill-current icons"/>
				</div>
			</div>
		</div>
  </Layout>
)

export default HomePage