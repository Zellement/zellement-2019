import React from 'react'
//import IconWordPress from "../../svgs/wordpress.svg";
import IconGatsbyJS from "../../svgs/gatsbyjs.svg";
import IconSass from "../../svgs/sass.svg";
import IconGraphQL from "../../svgs/graphql.svg";
import IconNetlify from "../../svgs/netlify.svg";
import IconNetlifyCMS from "../../svgs/netlifycms.svg";

const DevelopmentWork = ({devTitle, devURL, devDisplayURL, devDescription, devIcons}) => {

	const array = ["GatsbyJS","World"];

	for (let i = 0; i < array.length; i++) {
		if (array[i] == "GatsbyJS") {
	    	console.log(array[i]);
	    	const GatsbyJSIcon = true;
		}
	}

	return (

		<div className="border-b border-orange-800 pb-8">

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between">

				<div>

					<h3 className="text-2xl mt-5">{devTitle}</h3>
					<p><a target="_blank" rel="noopener noreferrer" href="{devURL}">{devDisplayURL}</a></p>

				</div>


				<div className="align-right">
					<div className="flex pt-3 md:pt-8">


					{
						devIcons.map(icon => (
					        <span key={icon}>{icon},</span>
					    ))
					}



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

				<p className="max-w-lg">{devDescription}</p>

			</div>

		</div>

	)

}


export default DevelopmentWork