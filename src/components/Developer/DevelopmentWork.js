import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GoLinkExternal } from 'react-icons/go';

const DevelopmentWork = ({devTitle, devURL, devDisplayURL, devDescription, devClasses, children}) => {

	return (

		<div className={"border-b border-orange-800 pb-8 max-w-3xl " + devClasses}>

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between max-w-3xl">

				<div>

					<h3 className="text-2xl mt-5">{devTitle}</h3>
					<p><OutboundLink className="hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href={devURL}>{devDisplayURL} <GoLinkExternal className="inline" /></OutboundLink></p>

				</div>


				<div className="align-right">
					<div className="flex pt-3 md:pt-8">

					{children}

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