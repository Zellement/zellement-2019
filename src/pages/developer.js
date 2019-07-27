import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import IconWordPress from "../svgs/wordpress.svg";
import IconGatsbyJS from "../svgs/gatsbyjs.svg";
import IconSass from "../svgs/sass.svg";
import IconGraphQL from "../svgs/graphql.svg";
import IconNetlify from "../svgs/netlify.svg";
import IconNetlifyCMS from "../svgs/netlifycms.svg";

const HomePage = () => (
  <Layout>
  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Developer</p>
		<h1 className="text-5xl text-grey-light mb-8">Developer.</h1>
		<p className="py-3 text-lg">I have over {new Date().getFullYear() - 2007} years of experience working in a leading digital marketing and web design company based in Nottingham, UK, and I've been lucky to have the chance to work on a multitude of languages, platforms and frameworks.</p>
		<p className="pb-3 text-md">In recent years, I have worked predominantly with WordPress, but I have been learning new technologies lately to continue to improve my knowledge.</p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Development Work</h2>
	</div>

		<div className="border-b border-orange-800 pb-8">

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between">

				<div>

					<h3 className="text-2xl mt-5">Sheringham Shantymen</h3>
					<p><a target="_blank" rel="noopener noreferrer" href="https://www.shantymen.com">www.shantymen.com</a></p>

				</div>

				<div className="align-right">
					<div className="flex pt-3 md:pt-8">
						<a aria-label="Visit GatsbyJS.org" className="self-center mr-2" target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">
							<IconGatsbyJS title="GatsbyJS" className="icons"/>
						</a>
						<a aria-label="Visit GraphQL.org" className="self-center mr-2" target="_blank" rel="noopener noreferrer" href="https://graphql.org/">
							<IconGraphQL title="GraphQL" className="icons"/>
						</a>
						<a aria-label="Vist Sass-Lang.com" className="self-center mr-2" target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/">
							<IconSass title="Sass" className="icons"/>
						</a>
						<a aria-label="Visit Netlify.com" className="self-center mr-2" target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">
							<IconNetlify title="Netlify" className="icons"/>
						</a>
						<a aria-label="Visit NetlifyCMS.org" className="self-center" target="_blank" rel="noopener noreferrer" href="https://www.netlifycms.org/">
							<IconNetlifyCMS title="Netlify CMS" className="icons"/>
						</a>
					</div>
				</div>

			</div>

			<div className="pt-8 w-100">

				<p className="max-w-lg">Built using GatsbyJS and the accessible Netlify CMS, this small site was developed for a voluntary shanty group, dedicated to raising money for the RNLI.</p>

			</div>

		</div>

  </Layout>
)

export default HomePage