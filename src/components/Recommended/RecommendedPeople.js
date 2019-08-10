import React from 'react'

import { GoLinkExternal } from 'react-icons/go';

const RecommendedPeople = ({recPeopleTitle, recPeopleURL, recPeopleDisplayURL, recPeopleDescription, recPeopleClasses, recPeopleJob, children}) => {

	return (

		<div className={"border-b border-orange-800 pb-8 lg:w-1/2 pr-4 " + recPeopleClasses}>

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between max-w-3xl">

				<div>

					<h3 className="text-2xl mt-5">{recPeopleTitle}</h3>
					<p><a className="hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href={recPeopleURL}>{recPeopleDisplayURL} <GoLinkExternal className="inline" /></a><br />
					{recPeopleJob}</p>

				</div>

			</div>

			<div className="pt-8 w-100">

				<p className="max-w-lg">{recPeopleDescription}</p>

			</div>

		</div>

	)

}


export default RecommendedPeople