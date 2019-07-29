import React from 'react'

const DesignerWork = ({devTitle, devURL, devDisplayURL, devDescription, children}) => {

	return (

		<div className="border-b border-orange-800 pb-8">

			<div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch w-100 justify-between">

				<div>

					<h3 className="text-2xl mt-5">{devTitle}</h3>
					<p><a className="hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href={devURL}>{devDisplayURL}</a></p>

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


export default DesignerWork