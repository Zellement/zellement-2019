import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from 'gatsby-image';

import ImageShowHide from '../components/ImageShowHide.js';

import DesignerWork from "../components/Designer/DesignerWork.js";

import IconPhotoshop from "../components/Icons/Designer/Photoshop.js";
import IconAdobeXD from "../components/Icons/Designer/AdobeXD.js";
import IconDeveloper from "../components/Icons/Developer.js";

const DesignerPage = props => {

  return (

  	<Layout>

  		<div className="">
  		  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Designer</p>
  			<h1 className="text-5xl text-grey-light mb-8">Designer.</h1>
  			<p className="py-3 text-lg max-w-3xl">I've been designing websites since the late nineties, when <em>web designer</em> and <em>webmaster</em> were the catch all roles. I have lived through iterations of fixed width, responsive, mobile-first, gradients, no gradients, drop shadows, no drop shadows, gradients again...</p>
  			<p className="pb-3 text-md max-w-3xl">It's safe to say I've seen a lot of change in the industry as regards design. Although I no longer class myself as a designer, I still dabble occasionally, particularly for freelance.</p>
  			<h2 className="text-3xl text-grey-light mb-4 mt-4">Web Design</h2>

        {/* 
          --------------------------------------------------------
          The Body Art Academy
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="The Body Art Academy"
          devURL="https://www.thebodyartacademy.com/"
          devDisplayURL="www.thebodyartacademy.com"
          devDescription="The design for The Body Art Academy needed to be somewhat stylish to match the type of customers they wanted to attract, so a modern, clean look with juxtaposition images and text was designed to do just that. This was a brand new website, so was designed from scratch.">
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <Img className="shadow-lg mt-4 mx-auto md:mr-auto md:ml-0 md:max-w-xl lg:max-w-md xl:max-w-xl" fluid={props.data.tbaaOne.childImageSharp.fluid} />

        <Img className="shadow-lg mx-auto md:mr-0 pb-8 md:ml-auto md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56" fluid={props.data.tbaaTwo.childImageSharp.fluid} />

        <Img className="shadow-lg mx-auto md:mr-auto pb-8 md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-sm xl:-mt-40" fluid={props.data.tbaaThree.childImageSharp.fluid} />

        <div className="border-b border-orange-800 pb-10 max-w-3xl"></div>

        {/* 
          --------------------------------------------------------
          Shantymen
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Sheringham Shantymen"
          devURL="https://www.shantymen.com/"
          devDisplayURL="www.shantymen.com"
          devDescription="This was a redesign of my own work, originally built circa 2015. The functionality and layout of the site was tired, so a fresh redesign and build was needed to keep the group's internet presence professional and modern.">
          <IconDeveloper />
          <IconAdobeXD />
        </DesignerWork>

        <div className="relative absolute-image-wrapper max-w-3xl">

            <Img className="shadow-lg absolute-image max-w-3xl z-0 top-0 left-0" fluid={props.data.shantymenBefore.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-0 bg-brown-standard text-brown-feint p-3">Original</p>

          <ImageShowHide>

            <Img className="shadow-lg absolute-image max-w-3xl z-10 top-0 left-0" fluid={props.data.shantymenOne.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-10 bg-brown-standard text-brown-feint p-3">New</p>

          </ImageShowHide>

        </div>


        <Img className="shadow-lg mt-4 mx-auto md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-xl" fluid={props.data.shantymenTwo.childImageSharp.fluid} />

        <Img className="shadow-lg mx-auto md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56" fluid={props.data.shantymenThree.childImageSharp.fluid} />

        <div className="border-b border-orange-800 pb-10 max-w-3xl"></div>

        {/* 
          --------------------------------------------------------
          Shantymen
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Sheringham Lifeboat"
          devURL="https://www.sheringhamlifeboat.co.uk/"
          devDisplayURL="www.sheringhamlifeboat.co.uk"
          devDescription="An old school, left aligned site was the predecessor, and even in 2014 it was looking very dated. Sheringham Lifeboat are lucky to be aligned with a professional photographer, so taking their photos and working up a new design was a simple enough process.">
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <div className="relative absolute-image-wrapper max-w-3xl">

            <Img className="shadow-lg absolute-image max-w-3xl z-0 top-0 left-0" fluid={props.data.sheringhamlifeboatBefore.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-0 bg-brown-standard text-brown-feint p-3">Original</p>

          <ImageShowHide>

            <Img className="shadow-lg absolute-image max-w-3xl z-10 top-0 left-0" fluid={props.data.sheringhamlifeboatOne.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-10 bg-brown-standard text-brown-feint p-3">New</p>

          </ImageShowHide>

        </div>


        <Img className="shadow-lg mt-4 mx-auto md:mr-auto" fluid={props.data.sheringhamlifeboatTwo.childImageSharp.fluid} />

        <div className="border-b border-orange-800 pb-10 max-w-3xl"></div>

        {/* 
          --------------------------------------------------------
          Arcadia
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Arcadia Physiotherapy"
          devURL="https://arcadia-therapy.com/"
          devDisplayURL="arcadia-therapy.com"
          devDescription="Arcadia's design had become dated, sporting some odd behaviours and broken layouts over years of changes and updates. Arcadia wanted a fresh design to begin their 2019, but also something easy to use for their existing clientele.">
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <div className="relative absolute-image-wrapper max-w-3xl">

            <Img className="shadow-lg absolute-image max-w-3xl z-0 top-0 left-0" fluid={props.data.arcadiaBefore.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-0 bg-brown-standard text-brown-feint p-3">Original</p>

          <ImageShowHide>

            <Img className="shadow-lg absolute-image max-w-3xl z-10 top-0 left-0" fluid={props.data.arcadiaOne.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-10 bg-brown-standard text-brown-feint p-3">New</p>

          </ImageShowHide>

        </div>


        <Img className="shadow-lg mt-4 mx-auto md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-xl" fluid={props.data.arcadiaTwo.childImageSharp.fluid} />

        <Img className="shadow-lg mx-auto md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56" fluid={props.data.arcadiaThree.childImageSharp.fluid} />

  		</div>

  	</Layout>

  )
}

export default DesignerPage

export const fluidImage = graphql`
  fragment fluidImageDesigner on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    tbaaOne: file(relativePath: { eq: "designs/thebodyartacademy-01.jpg" }) {
      ...fluidImageDesigner
    }
    tbaaTwo: file(relativePath: { eq: "designs/thebodyartacademy-02.jpg" }) {
      ...fluidImageDesigner
    }
    tbaaThree: file(relativePath: { eq: "designs/thebodyartacademy-03.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenBefore: file(relativePath: { eq: "designs/shantymen-before.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenOne: file(relativePath: { eq: "designs/shantymen-01.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenTwo: file(relativePath: { eq: "designs/shantymen-02.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenThree: file(relativePath: { eq: "designs/shantymen-03.jpg" }) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatBefore: file(relativePath: { eq: "designs/sheringham-lifeboat-before.jpg" }) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatOne: file(relativePath: { eq: "designs/sheringham-lifeboat-01.jpg" }) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatTwo: file(relativePath: { eq: "designs/sheringham-lifeboat-02.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaBefore: file(relativePath: { eq: "designs/arcadia-therapy-before.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaOne: file(relativePath: { eq: "designs/arcadia-therapy-01.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaTwo: file(relativePath: { eq: "designs/arcadia-therapy-02.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaThree: file(relativePath: { eq: "designs/arcadia-therapy-03.jpg" }) {
      ...fluidImageDesigner
    }
  }
`;