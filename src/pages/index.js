import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/Wrapper'
import AnimatedLink from "../components/AnimatedLink"

import BackgroundImage from 'gatsby-background-image'

const HomePage = props => (
  <Wrapper seoDescription="A Nottingham based WordPress and front-end developer, with experience in management, leadership and design." seoTitle="WordPress Developer & Front-end Developer Nottingham">

  <div className="relative home-page-image z-10">
    <BackgroundImage Tag="section" className='w-100 h-screen bg-left' fluid={props.data.meOne.childImageSharp.fluid} backgroundColor={`#040e18`} />

  	<h1 className="text-6xl text-grey-light leading-none absolute right-2 top-6 z-40 lg:right-5">Hello.</h1>
  	<h2 className="text-3xl text-grey-light leading-none absolute right-2 top-11 z-40 lg:right-5">I'm Dan Farrow.</h2>

    {/*<Img className="shadow-lg max-w-xl" fluid={} />*/}
  	
    <ul className="absolute top-20 z-40 right-2 lg:right-5">
  		<li className="mb-1 text-xl text-right">A <AnimatedLink className="text-white hover:text-orange-500" to="/developer">WordPress developer</AnimatedLink>.</li>
  		<li className="mb-1 text-xl text-right">A <AnimatedLink className="text-white hover:text-orange-500" to="/developer">front-end developer</AnimatedLink>.</li>
  		<li className="mb-1 text-xl text-right">An occasional <AnimatedLink className="text-white hover:text-orange-500" to="/designer">designer</AnimatedLink>.</li>
      <li className="mb-1 text-xl text-right">An experienced <AnimatedLink className="text-white hover:text-orange-500" to="/manager">manager</AnimatedLink>.</li>
      <li className="mb-1 text-xl text-right">A budding <AnimatedLink className="text-white hover:text-orange-500" to="/musician">musician</AnimatedLink>.</li>
  		<li className="mb-1 text-xl text-right">An average <AnimatedLink className="text-white hover:text-orange-500" to="/artist">artist</AnimatedLink>.</li>
  		<li className="mb-1 text-xl text-right">And a simple <AnimatedLink className="text-white hover:text-orange-500" to="/hobbyist">hobbyist</AnimatedLink>.</li>
    	</ul>

  </div>

  </Wrapper>
)

export default HomePage

export const fluidImage = graphql`
  fragment fluidImageHome on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    meOne: file(relativePath: { eq: "me-01.jpg" }) {
      ...fluidImageHome
    }
  }
`;