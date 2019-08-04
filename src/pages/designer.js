import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from 'gatsby-image';

//import ImageSlider from '../scripts/image-slider.js';
import ImageShowHide from '../components/ImageShowHide.js';

import DesignerWork from "../components/Designer/DesignerWork.js";

import IconPhotoshop from "../components/Icons/Designer/Photoshop.js";
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

        <DesignerWork
          devTitle="Arcadia Physiotherapy"
          devURL="https://arcadia-therapy.com/"
          devDisplayURL="www.arcadia-therapy.com"
          devDescription="Arcadia's design had become dated ">
          <IconPhotoshop />
          <IconDeveloper />
        </DesignerWork>

        <div className="relative absolute-image-wrapper max-w-3xl">

            <Img className="absolute-image max-w-3xl z-0 top-0 left-0" fluid={props.data.arcadiaBefore.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-0 bg-brown-standard p-3">Original</p>

          <ImageShowHide>

            <Img className="absolute-image max-w-3xl z-10 top-0 left-0" fluid={props.data.arcadiaOne.childImageSharp.fluid} />

            <p className="absolute top-2 right-0 z-10 bg-brown-standard p-3">New</p>

          </ImageShowHide>

        </div>


        <Img className="mt-4 mx-auto md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-xl" fluid={props.data.arcadiaTwo.childImageSharp.fluid} />

        <Img className="mx-auto md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56" fluid={props.data.arcadiaThree.childImageSharp.fluid} />

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