import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const Page = props => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Hobbyist</p>
		<h1 className="text-5xl text-grey-light mb-8">Hobbyist.</h1>
		<p className="py-3 text-lg"></p>
		<p className="pb-3 text-md"></p>

		<h2 className="text-3xl text-grey-light mb-4 mt-4">Gaming</h2>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Nottingham Forest</h2>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Weight Training</h2>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Tattoos</h2>
      
      		<Img className="w-100 max-w-xl" fluid={props.data.tattoosOne.childImageSharp.fluid} />

		<h2 className="text-3xl text-grey-light mb-4 mt-4">Cycling</h2>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Batman</h2>

		<iframe width="560" height="315" src="https://www.youtube.com/embed/AnTSE-Qvt_E?start=92" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	</div>

  </Layout>
)

export default Page

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    tattoosOne: file(relativePath: { eq: "hobbyist/tattoos/tattoos-01.jpg" }) {
      ...fluidImage
    }
  }
`;