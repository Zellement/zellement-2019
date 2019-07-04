import React from "react"
//import Img from 'gatsby-image'
import AnimatedLink from "../components/AnimatedLink"

const Logo = () => (
  <div className="p-2">
    <AnimatedLink to="/" className="text-centre" title="Go home">
      <span className="block text-3xl leading-none">Dan Farrow</span>
      <span className="block text-md">www.zellement.com</span>
    </AnimatedLink>
  </div>
)

export default Logo