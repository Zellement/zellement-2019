import React from 'react'

var today = new Date();
var yyyy = today.getFullYear();

const Footer = ({displayText, className, to, title}) => (
	<div className="container">
	    <p>© {new Date().getFullYear()}</p>
		<p>Website by <a href="http://www.zellement.com">Zellement</a></p>
	</div>
)

export default Footer