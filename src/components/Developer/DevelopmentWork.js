import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GoLinkExternal } from 'react-icons/go';

const DevelopmentWork = ({devTitle, devURL, devDisplayURL, devDescription, devClasses, date, children}) => {

	return (

		<div className={"border-b border-orange-800 pb-8 max-w-3xl " + devClasses}>

			<div className="flex flex-col items-stretch justify-between max-w-3xl lg:flex-row lg:flex-wrap w-100">

				<div>

					<h3 className="mt-5 text-2xl">{devTitle}</h3>
					<p className="text-xs tracking-widest uppercase text-brown-light"><span className="">{date}</span> &bull; <OutboundLink className=" hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href={devURL}>{devDisplayURL} <GoLinkExternal className="inline" /></OutboundLink></p>

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