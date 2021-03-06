import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/Wrapper'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const Page = props => (
  <Wrapper seoTitle="Musician || Dan Farrow" classProps="pt-8 mt-12 md:mt-0 mx-auto px-4 md:p-10 lg:p-16 lg:pr-0">

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Musician</p>
		<h1 className="text-5xl text-grey-light mb-8">Musician.</h1>
		<p className="py-3 text-lg max-w-3xl">I'm hugely into a select few genres of music, but mostly a massive metalhead. From old school metal bands like <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.slayer.net">Slayer</OutboundLink> and <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.metallica.com">Metallica</OutboundLink>, all the way through to heavier bands such as <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.lamb-of-god.com/">Lamb of God</OutboundLink>, <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://behemoth.pl/">Behemoth</OutboundLink> and <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.sylosis-band.com/">Sylosis</OutboundLink>.</p>
		<p className="pb-3 text-md max-w-3xl">In addition to metal, I've found myself listening to a lot of "modern classical", much of which consists of film and TV music. I can't get enough of my <OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/playlist/42p1sRbO9jR4wFq8LDnAXh/">self-proclaimed classical playlist</OutboundLink> on Spotify, a lot of which comes in the form on Hans Zimmer.</p>
		
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Guitarist</h2>

		<p className="max-w-lg text-lg mb-4">Since 2011, I have been the guitarist for a Nottingham based metal band called <em><OutboundLink className="text-white underline" target="_blank" rel="noopener noreferrer" href="http://www.ropewalkband.com">Ropewalk</OutboundLink></em>.</p>

		<p className="max-w-lg mb-8">I'm a self-taught guitarist since picking up a brand new <em>Jay Turser</em> 6 string in my late teens (my first electric instrument was actually a 5 string bass). I learned tab to start off, and still only know about 3 chords. Our singer left in 2016, and since then I've taken on the vocals role too.</p>

    <div className="relative">

  			<Img className="w-100 max-w-sm mr-auto xl:max-w-md" fluid={props.data.ropewalkOne.childImageSharp.fluid} />

        <p className="border-orange-400 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-4 sm:right-0 sm:max-w-sm sm:pr-0 sm:mt-64 md:text-xl md:-pl-16 md:bg-transparent lg:pt-6 lg:top-0 xl:mt-48 xl:text-2xl">I've since "upgraded" my Jay Turser to an ESP Ltd EC-1000 (standard) and ESP Ltd Explorer (drop C).</p>
  
  			<Img className="w-100 max-w-sm ml-auto sm:-mt-10 sm:-mt-24 mb-4 lg:-mt-40 xl:-mt-56" fluid={props.data.ropewalkTwo.childImageSharp.fluid} />

    </div>
		
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Violinist</h2>

		<p className="max-w-lg mb-4">I've been slightly obsessed with string-led orchestral music for a few years now, and I kept telling myself and anyone else who would listen that I was going to learn violin.</p>

		<p className="max-w-lg mb-8">So in early 2019, I bought my first violin and started the long road of self-teaching myself how to play it, so that I can emulate some of the amazing layered music I hear in film and TV.</p>

    <div className="relative">

      	<Img className="w-100 max-w-md mx-auto" fluid={props.data.violinOne.childImageSharp.fluid} />

        <p className="border-orange-400 max-w-md mx-auto border-l-2 p-8 font-color-font text-white bg-brown-standard-80 sm:absolute sm:bottom-0 sm:right-0 sm:max-w-sm sm:pr-0  md:text-xl xl:text-2xl">I'm following online video tutorials to improve at violin.</p>

    </div>

	</div>

  </Wrapper>
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