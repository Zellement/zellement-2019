import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import DevelopmentWork from "../components/Developer/DevelopmentWork.js";

import IconGatsbyJS from "../components/Developer/Icons/GatsbyJS.js";
import IconGraphQL from "../components/Developer/Icons/GraphQL.js";
import IconSass from "../components/Developer/Icons/Sass.js";
import IconNetlify from "../components/Developer/Icons/Netlify.js";
import IconNetlifyCMS from "../components/Developer/Icons/NetlifyCMS.js";
import IconWordPress from "../components/Developer/Icons/WordPress.js";
import IconcPanel from "../components/Developer/Icons/cPanel.js";

const HomePage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Developer</p>
		<h1 className="text-5xl text-grey-light mb-8">Developer.</h1>
		<p className="py-3 text-lg">I have over {new Date().getFullYear() - 2007} years of experience working in a leading digital marketing and web design company based in Nottingham, UK, and I've been lucky to have the chance to work on a multitude of languages, platforms and frameworks.</p>
		<p className="pb-3 text-md">In recent years, I have worked predominantly with WordPress, but I have been learning new technologies lately to continue to improve my knowledge.</p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Development Work</h2>
	</div>

	<DevelopmentWork
		devTitle="Sheringham Shantymen"
		devURL="https://www.shantymen.com"
		devDisplayURL="www.shantymen.com"
		devDescription="Built using GatsbyJS and the accessible Netlify CMS, this small site was developed for a voluntary shanty group, dedicated to raising money for the RNLI.">
		<IconGatsbyJS />
		<IconGraphQL />
		<IconSass />
		<IconNetlifyCMS />
		<IconNetlify />
	</DevelopmentWork>

	<DevelopmentWork
		devTitle="Arcadia Physiotherapy"
		devURL="https://www.arcadia-therapy.com"
		devDisplayURL="www.arcadia-therapy.com"
		devDescription="A local physiotherapist needed an upgraded, smooth and easy to use experience in order to expand her brand. A custom built WordPress theme helped her keep on top of delivering excellent content to her customers.">
		<IconWordPress />
		<IconSass />
	</DevelopmentWork>

	<DevelopmentWork
		devTitle="The Body Art Academy"
		devURL="https://www.thebodyartacademy.com/"
		devDisplayURL="www.thebodyartacademy.com"
		devDescription="A Derby based piercing and tattoo training company that needed its own access, and a high-end looking website.">
		<IconWordPress />
		<IconSass />
	</DevelopmentWork>

  </Layout>
)

export default HomePage