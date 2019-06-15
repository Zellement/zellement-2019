import React from "react"
//import Img from 'gatsby-image'
import AnimatedLink from "../components/AnimatedLink"

const Logo = () => (
  <div className="md:float-left">
    <AnimatedLink to="/" className="logo__image" title="Go home">
      <img alt="Logo" src="https://via.placeholder.com/150" />
    </AnimatedLink>
  </div>
)

export default Logo