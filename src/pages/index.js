import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from 'gatsby-image';

import BackgroundImage from 'gatsby-background-image'

const HomePage = props => (
  <Layout>

  <div className="relative home-page-image">
    <BackgroundImage Tag="section" className='w-100 h-screen bg-left' fluid={props.data.meOne.childImageSharp.fluid} backgroundColor={`#040e18`} />

  	<h1 className="text-6xl text-grey-light leading-none absolute left-2 top-6 z-50">Hello.</h1>
  	<h2 className="text-3xl text-grey-light leading-none absolute left-2 top-11 z-50">I'm Dan Farrow.</h2>

    {/*<Img className="shadow-lg max-w-xl" fluid={} />*/}
  	
    <ul className="absolute top-20 left-2 z-50">
  		<li className="py-2 text-2xl">A <AnimatedLink className="text-white" to="/developer">WordPress developer</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">A <AnimatedLink className="text-white" to="/developer">front-end developer</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">An occasional <AnimatedLink className="text-white" to="/designer">designer</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">An average <AnimatedLink className="text-white" to="/artist">artist</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">An experienced <AnimatedLink className="text-white" to="/manager">manager</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">A budding <AnimatedLink className="text-white" to="/musician">musician</AnimatedLink>.</li>
  		<li className="py-2 text-2xl">And a simple <AnimatedLink className="text-white" to="/hobbyist">hobbyist</AnimatedLink>.</li>
    	</ul>

  </div>

  </Layout>
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