import React from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = () => (
	<div>
		<header className="block fixed top-0 left-0 w-full">
			<div className="container mx-auto">
				<Logo />
				<Navigation />
			</div>
		</header>
		<div className="h-20 w-full block"></div>
	</div>
)

export default Header