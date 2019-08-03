import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const Page = props => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Musician</p>
		<h1 className="text-5xl text-grey-light mb-8">Musician.</h1>
		<p className="py-3 text-lg">I'm hugely into a select few genres of music, but mostly a massive metalhead. From old school metal bands like <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.slayer.net">Slayer</a> and <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.metallica.com">Metallica</a>, all the way through to heavier bands such as <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.lamb-of-god.com/">Lamb of God</a>, <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://behemoth.pl/">Behemoth</a> and Pantera.</p>
		<p className="pb-3 text-md">In addition to metal, I've found myself listening to a lot of "modern classical", much of which consists of film and TV music. I can't get enough of my <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/playlist/42p1sRbO9jR4wFq8LDnAXh/">self-proclaimed classical playlist</a> on Spotify, a lot which comes in the form on Hans Zimmer.</p>
		
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Guitarist</h2>

		<p className="max-w-lg mb-4">Since 2011, I have been the guitarist for a Nottingham based metal band called <em><a className="text-white" target="_blank" rel="noopener noreferrer" href="http://www.ropewalkband.com">Ropewalk</a></em>.</p>

		<p className="max-w-lg mb-8">I'm a massive metal fan, and a self-taught guitarist since I was a teenager. I learned tab to start off, and still only know about 3 chords. Our singer left in 2016, and since then I've taken on the vocals role too.</p>

      			<Img className="w-100 max-w-sm mr-auto" fluid={props.data.ropewalkOne.childImageSharp.fluid} />
      
      			<Img className="w-100 max-w-sm ml-auto -mt-10 sm:-mt-24 mb-4 lg:-mt-40 xl:-mt-56 xl:mr-10" fluid={props.data.ropewalkTwo.childImageSharp.fluid} />
		
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Violinist</h2>

		<p className="max-w-lg mb-4">I've been slightly obsessed with string-led orchestral music for a few years now, and I kept telling myself and anyone else who would listen I was going to learn violin.</p>

		<p className="max-w-lg mb-8">So in early 2019, I bought my first violin and started the long road of self-teaching myself how to play it, so that I can emulate some of the amazing layered music I hear in film and TV.</p>

      			<Img className="w-100" fluid={props.data.violinOne.childImageSharp.fluid} />

	</div>

  </Layout>
)

export default Page

export const fluidImage = graphql`
  fragment fluidImage2 on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    ropewalkOne: file(relativePath: { eq: "hobbyist/ropewalk/ropewalk-01.jpg" }) {
      ...fluidImage2
    }
    ropewalkTwo: file(relativePath: { eq: "hobbyist/ropewalk/ropewalk-02.jpg" }) {
      ...fluidImage2
    }
    violinOne: file(relativePath: { eq: "hobbyist/violin/violin-01.jpg" }) {
      ...fluidImage2
    }
  }
`;