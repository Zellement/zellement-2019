import React from 'react'
import IconWordPress from "./Icons/Wordpress.js";
import IconGatsbyJS from "./Icons/GatsbyJS.js";
import IconSass from "./Icons/Sass.js";
import IconGraphQL from "./Icons/GraphQL.js";
import IconNetlify from "./Icons/Netlify.js";
import IconNetlifyCMS from "./Icons/NetlifyCMS.js";

const DevelopmentWork = ({devTitle, devURL, devDisplayURL, devDescription, devIcons}) => {

/*	const array = ["GatsbyJS","World"];

	for (let i = 0; i < array.length; i++) {
		if (array[i] == "GatsbyJS") {
	    	console.log(array[i]);
	    	const GatsbyJSIcon = true;
		}
	}*/

	return (

		<div className="border-b border-orange-800 pb-8">

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between">

				<div>

					<h3 className="text-2xl mt-5">{devTitle}</h3>
					<p><a target="_blank" rel="noopener noreferrer" href="{devURL}">{devDisplayURL}</a></p>

				</div>


				<div className="align-right">
					<div className="flex pt-3 md:pt-8">


{/*					{
						devIcons.map(icon => (
					        <span key={icon}>{icon},</span>
					    ))
					}*/}



						<IconGatsbyJS />
						<IconGraphQL />
						<IconSass />




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