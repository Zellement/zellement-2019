import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

const ArtistPage = props => {
	return (
		<Layout seoTitle="Digital Artist Nottingham || Dan Farrow" classProps="pt-8 mt-12 md:mt-0 mx-auto px-4 md:p-10 lg:p-16 lg:pr-0">

			<div className="max-w-3xl">
		  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Artist</p>
			<h1 className="text-5xl text-grey-light mb-8">Artist.</h1>

  			<p className="py-3 text-lg max-w-3xl">I'm no huge artist, but I do occasionally like to dabble with digital brushing. For the most part it's for my <AnimatedLink to="/musician">band</AnimatedLink>, but it is very fulfilling to see your own artwork that's taken months to produce end up on t-shirts and CDs.</p>
  			<p className="pb-3 text-md max-w-3xl">The following work has all been for Ropewalk, and my thanks to those that have posed in the tees.</p>
			<h2 className="text-3xl text-grey-light mb-4 mt-4">Album Artwork</h2>

  			<p className="pb-3 text-md max-w-3xl">For our album <em>On Your Hands</em>, I produced this from scratch in PhotoShop.</p>

		    <div className="relative">

		  		<Img className="w-100 max-w-sm mr-auto xl:max-w-lg" fluid={props.data.ropewalkOne.childImageSharp.fluid} />
		  
		  		<Img className="w-100 z-20 max-w-sm ml-auto sm:-mt-10 sm:-mt-24 mb-4 lg:-mt-40 xl:-mt-56" fluid={props.data.ropewalkTwo.childImageSharp.fluid} />

		        <p className="border-orange-400 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-0 sm:right-0 sm:max-w-xs sm:pr-0  md:text-xl md:-pl-16 md:bg-transparent lg:pt-6 lg:top-0 lg:max-w-md xl:text-2xl">Thanks to all those that posed for these photos. You know who you are.</p>

		    	<Img className="shadow-lg mx-auto sm:-mt-12 md:mr-auto pb-8 md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-10" fluid={props.data.ropewalkThree.childImageSharp.fluid} />

		    </div>

		</div>

		</Layout>
	)
}

export default ArtistPage

export const fluidImage = graphql`
  fragment fluidImageArtist on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    ropewalkOne: file(relativePath: { eq: "artist/ropewalk-01.jpg" }) {
      ...fluidImageArtist
    }
    ropewalkTwo: file(relativePath: { eq: "artist/ropewalk-02.jpg" }) {
      ...fluidImageArtist
    }
    ropewalkThree: file(relativePath: { eq: "artist/ropewalk-03.jpg" }) {
      ...fluidImageArtist
  }
  }
`;