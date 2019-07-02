import React from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = () => (
	<div>
		<header className="block">
			<div className="container mx-auto">
				<Logo />
				<Navigation />
			</div>
			<div className="clearfix"></div>
		</header>
	</div>
)

export default Header