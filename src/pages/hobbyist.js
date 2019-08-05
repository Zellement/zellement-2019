import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

import { FaRegMeh } from 'react-icons/fa';

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const Page = props => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Hobbyist</p>
		<h1 className="text-5xl text-grey-light mb-8">Hobbyist.</h1>
		<p className="py-3 text-lg">I tend to keep myself busy outside of my core interests, and below you'll find some of the other things that interest me.</p>

		<h2 className="text-3xl text-grey-light mb-4 mt-4">Gaming</h2>

    <p className="py-3">I grew up playing some old school games on both PC and the old Commodore 64, from <em>Spy vs. Spy</em>, <em>Emlyn Hughes Soccer</em> and <em>Prince of Persia</em>.</p>

    <div className="relative">
      
      <Img className="w-100 max-w-md" fluid={props.data.emlynHughes.childImageSharp.fluid} />
      <Img className="w-100 max-w-md ml-auto -mt-10 md:-mt-24" fluid={props.data.spyVsSpy.childImageSharp.fluid} />

        <p className="border-orange-400 z-50 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:bottom-7 sm:right-1 sm:max-w-sm sm:pr-0 md:text-xl md:bottom-10 md:bg-transparent  lg:bottom-6 xl:text-2xl xl:bottom-4">Graphics still are still breathtaking.</p>

      <Img className="w-100 max-w-md sm:-mt-10 md:-mt-24" fluid={props.data.princeOfPersia.childImageSharp.fluid} />

    </div>

    <p className="py-3 my-4">My first console was the Nintendo (NES) - I played a lot of Trogg - and went through owning an original PlayStation, PS2, Xbox 360, PS3 and now the PS4.</p>

    <div className="relative">
      
      <Img className="w-100 max-w-md" fluid={props.data.ffx.childImageSharp.fluid} />
      <Img className="w-100 max-w-md ml-auto -mt-10 md:-mt-12" fluid={props.data.me2.childImageSharp.fluid} />

        <p className="border-orange-400 z-50 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:bottom-19 sm:right-1 sm:max-w-sm sm:pr-0 md:text-xl md:max-w-md md:bottom-23 md:bg-transparent lg:max-w-sm lg:bottom-18 xl:text-2xl xl:bottom-17">Final Fantasy X, Mass Effect, the Batman: Arkham series and The Last of Us.</p>

      <Img className="w-100 max-w-md sm:-mt-10 md:-mt-12" fluid={props.data.arkhamCity.childImageSharp.fluid} />
      <Img className="w-100 max-w-md ml-auto -mt-10 md:-mt-12" fluid={props.data.lastOfUs.childImageSharp.fluid} />

    </div>

    <div className="relative">

        <p className="border-orange-400 z-50 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-20 sm:right-1 sm:max-w-sm sm:pr-0 md:text-xl md:max-w-md lg:bg-transparent lg:max-w-lg xl:text-2xl xl:top-16">I'm also a huge fan of putting people in the PSVR and watching them scream as a shark attacks their diving cage, or fly like an eagle across Rome.</p>

      <Img className="w-100 max-w-xs mx-auto sm:ml-0" fluid={props.data.psvr.childImageSharp.fluid} />

    </div>

		<h2 className="text-3xl text-grey-light mb-4 mt-6">Nottingham Forest</h2>

    <p className="py-3 my-4">I'm a season card holder at Nottingham Forest, because I just love being disappointed in life <FaRegMeh className="inline"/>. Since moving to Nottingham in circa 2007, I have adopted the city as my home, and have since embraced Forest.</p>

    <div className="relative">
      
      <Img className="w-100 mx-auto max-w-md sm:ml-0 md:max-w-sm" fluid={props.data.nffcThree.childImageSharp.fluid} />

        <p className="border-orange-400 z-50 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-15 sm:right-1 sm:max-w-sm sm:pr-0 md:text-xl md:max-w-md md:top-10 md:bg-transparent lg:max-w-sm lg:top-5 xl:max-w-md xl:text-2xl xl:top-3">During a sponsored rough sleeping night at the City Ground, I was lucky enough to snap this 3am picture.</p>

      <Img className="w-100 max-w-md ml-auto sm:-mt-10 md:max-w-sm lg:-mt-56 lg:max-w-md" fluid={props.data.nffcTwo.childImageSharp.fluid} />
      <Img className="w-100 max-w-md -mt-10 md:-mt-12 md:max-w-sm lg:-mt-32 lg:max-w-md" fluid={props.data.nffcOne.childImageSharp.fluid} />

    </div>

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
    princeOfPersia: file(relativePath: { eq: "hobbyist/games/prince-of-persia.png" }) {
      ...fluidImage
    }
    emlynHughes: file(relativePath: { eq: "hobbyist/games/emlyn-hughes.jpg" }) {
      ...fluidImage
    }
    spyVsSpy: file(relativePath: { eq: "hobbyist/games/spy-v-spy.jpg" }) {
      ...fluidImage
    }
    me2: file(relativePath: { eq: "hobbyist/games/me2.jpg" }) {
      ...fluidImage
    }
    arkhamCity: file(relativePath: { eq: "hobbyist/games/arkham-city.jpg" }) {
      ...fluidImage
    }
    ffx: file(relativePath: { eq: "hobbyist/games/ffx.jpg" }) {
      ...fluidImage
    }
    lastOfUs: file(relativePath: { eq: "hobbyist/games/last-of-us.jpg" }) {
      ...fluidImage
    }
    psvr: file(relativePath: { eq: "hobbyist/games/psvr.jpg" }) {
      ...fluidImage
    }
    nffcOne: file(relativePath: { eq: "hobbyist/nffc/nffc-01.jpg" }) {
      ...fluidImage
    }
    nffcTwo: file(relativePath: { eq: "hobbyist/nffc/nffc-02.jpg" }) {
      ...fluidImage
    }
    nffcThree: file(relativePath: { eq: "hobbyist/nffc/nffc-03.jpg" }) {
      ...fluidImage
    }
  }
`;