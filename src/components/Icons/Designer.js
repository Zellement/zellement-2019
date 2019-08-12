import React from 'react'
import Icon from "../../svgs/designer.svg";
import AnimatedLink from "../../components/AnimatedLink"

const IconDesigner = () => {

	return (

		<AnimatedLink aria-label="Visit the Developer page" className="self-center ml-2" activeClassName="active" to="/designer"><Icon title="Designer" className="icons"/>
		</AnimatedLink>

	)

}


export default IconDesigner