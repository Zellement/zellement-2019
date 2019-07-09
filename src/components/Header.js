import React from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = () => (
		<header className="block fixed top-0 left-0 w-full md:relative md:w-1/3 lg:w-1/4">
			<div className="container mx-auto">
				<Logo />
				<Navigation />
			</div>
			<div className="h-20 w-full block"></div>
		</header>
)

export default Header