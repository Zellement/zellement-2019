import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from 'gatsby-image';

const HomePage = props => (
  <Layout>
	<h1 className="text-6xl text-grey-light leading-none">Hello.</h1>
	<h2 className="text-3xl text-grey-light leading-none my-8">I'm Dan Farrow.</h2>

  <div className="relative max-w-xl">

    <Img className="shadow-lg max-w-xl" fluid={props.data.meOne.childImageSharp.fluid} />
  	
    <ul className="absolute top-3 right-0">
  		<li className="bg-brown-standard p-2">A <AnimatedLink className="text-white" to="/developer">WordPress developer</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">A <AnimatedLink className="text-white" to="/developer">front-end developer</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">An occasional <AnimatedLink className="text-white" to="/designer">designer</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">An average <AnimatedLink className="text-white" to="/artist">artist</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">An experienced <AnimatedLink className="text-white" to="/manager">manager</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">A budding <AnimatedLink className="text-white" to="/musician">musician</AnimatedLink>.</li>
  		<li className="bg-brown-standard p-2">And a simple <AnimatedLink className="text-white" to="/hobbyist">hobbyist</AnimatedLink>.</li>
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