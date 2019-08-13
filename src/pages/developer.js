import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import DevelopmentWork from "../components/Developer/DevelopmentWork.js";

import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";
import IconGraphQL from "../components/Icons/Developer/GraphQL.js";
import IconSass from "../components/Icons/Developer/Sass.js";
import IconNetlify from "../components/Icons/Developer/Netlify.js";
import IconNetlifyCMS from "../components/Icons/Developer/NetlifyCMS.js";
import IconTailwind from "../components/Icons/Developer/Tailwind.js";
import IconWordPress from "../components/Icons/Developer/WordPress.js";
import IconcPanel from "../components/Icons/Developer/cPanel.js";
import IconDesigner from "../components/Icons/Designer.js";

const HomePage = () => (
  <Layout classProps="pt-8 mt-12 md:mt-0 mx-auto px-4 md:p-10 lg:p-16 lg:pr-0">

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Developer</p>
		<h1 className="text-5xl text-grey-light mb-8">Developer.</h1>
		<p className="py-3 text-lg">I have over {new Date().getFullYear() - 2007} years of experience working in a leading digital marketing and web design company based in Nottingham, UK, and I've been lucky to have the chance to work on a multitude of languages, platforms and frameworks.</p>
		<p className="pb-3 text-md">In recent years, I have worked predominantly as a WordPress developer, but I have recently been using newer technologies such as GatsbyJS to deliver headless CMS websites.</p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Development Work</h2>
	</div>

	<DevelopmentWork
		devTitle="Sheringham Shantymen"
		devURL="https://www.shantymen.com"
		devDisplayURL="www.shantymen.com"
		devDescription="Built using GatsbyJS and the accessible Netlify CMS, this small site was developed for a voluntary shanty group, dedicated to raising money for the RNLI.">
		<IconDesigner />
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
		devDescription="Arcadia were running an old, slow WordPress build from a few years ago. In actively using and improving their site, more and more functionality was added to the site in the form of plugins, draining the site's speed. An upgrade was needed so I worked with Arcadia to deliver a custom built WordPress theme that is easy to update from the backend.">
		<IconDesigner />
		<IconWordPress />
		<IconSass />
	</DevelopmentWork>

	<DevelopmentWork
		devTitle="The Body Art Academy"
		devURL="https://www.thebodyartacademy.com/"
		devDisplayURL="www.thebodyartacademy.com"
		devDescription="A Derby based piercing and tattoo training company that needed its own access, and a high-end looking website.">
		<IconDesigner />
		<IconWordPress />
		<IconSass />
		<IconcPanel />
	</DevelopmentWork>

	<DevelopmentWork
		devTitle="Sheringham Lifeboat"
		devURL="https://www.sheringhamlifeboat.co.uk/"
		devDisplayURL="www.sheringhamlifeboat.co.uk"
		devDescription="Built for the RNLI on the east coast, the Sheringham Lifeboat website was developed in WordPress and allows for those part of the crew to inform visitors of both current equipment and upcoming events.">
		<IconDesigner />
		<IconWordPress />
		<IconSass />
		<IconcPanel />
	</DevelopmentWork>

	<DevelopmentWork
		devTitle="Burntwood Group"
		devURL="https://www.burntwoodgroup.com/"
		devDisplayURL="www.burntwoodgroup.com"
		devDescription="A website in order to help increase leads sent to a drainage company, this was built with WordPress so that the client could keep it up to date as their business needs changed.">
		<IconDesigner />
		<IconWordPress />
		<IconSass />
		<IconcPanel />
	</DevelopmentWork>

	<DevelopmentWork
		devClasses="bg-brown-dark p-4"
		devTitle="Zellement"
		devURL="https://www.zellement.com/"
		devDisplayURL="www.zellement.com"
		devDescription="The website you are currently on is my second foray into GatsbyJS and the JAMstack approach to building and delivering websites.">
		<IconDesigner />
		<IconGatsbyJS />
		<IconGraphQL />
		<IconTailwind />
		<IconNetlify />
	</DevelopmentWork>

  </Layout>
)

export default HomePage