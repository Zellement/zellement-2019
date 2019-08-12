import React from 'react'
import Icon from "../../svgs/developer.svg";
import AnimatedLink from "../../components/AnimatedLink"

const IconDeveloper = () => {

	return (

		<AnimatedLink aria-label="Visit the Designer page" className="self-center ml-2" activeClassName="active" to="/developer"><Icon title="Developer" className="icons"/>
		</AnimatedLink>

	)

}


export default IconDeveloper