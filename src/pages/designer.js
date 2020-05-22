import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

import ImageShowHide from "../components/ImageShowHide.js"

import DesignerWork from "../components/Designer/DesignerWork.js"

import IconPhotoshop from "../components/Icons/Designer/Photoshop.js"
import IconAdobeXD from "../components/Icons/Designer/AdobeXD.js"
import IconFigma from "../components/Icons/Designer/Figma.js"

import IconDeveloper from "../components/Icons/Developer.js"

const DesignerPage = props => {
  return (
    <Wrapper
      seoDescription="A Nottingham based Web Designer with over 12 years experience in the industry."
      seoTitle="Web Designer Nottingham || Dan Farrow"
      classProps="pt-8 mt-12 md:mt-0 mx-auto px-4 md:p-10 lg:p-16 lg:pr-0"
    >
      <div className="max-w-3xl">
        <p className="tracking-wider text-md font-color-font">
          <AnimatedLink to="/">Dan Farrow</AnimatedLink> > Designer
        </p>
        <h1 className="mb-8 text-5xl text-grey-light">Designer.</h1>
        <p className="max-w-3xl py-3 text-lg">
          I've been designing websites since the late nineties, when{" "}
          <em>web designer</em> and <em>webmaster</em> were the catch all roles.
          I have lived through iterations of fixed width, responsive,
          mobile-first, gradients, no gradients, drop shadows, no drop shadows,
          gradients again...
        </p>
        <p className="max-w-3xl pb-3 text-md">
          It's safe to say I've seen a lot of change in the industry as regards
          design. Although I no longer class myself as a designer, I still
          dabble occasionally, particularly for freelance.
        </p>
        <h2 className="mt-4 mb-4 text-3xl text-grey-light">Web Design Work</h2>

        {/* 
          --------------------------------------------------------
          The Body Art Academy
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="The Body Art Academy"
          devURL="https://www.thebodyartacademy.com/"
          devDisplayURL="www.thebodyartacademy.com"
          devDescription="The design for The Body Art Academy needed to be somewhat stylish to match the type of customers they wanted to attract, so a modern, clean look with juxtaposition images and text was designed to do just that. This was a brand new website, so was designed from scratch."
        >
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:max-w-md xl:max-w-xl"
          fluid={props.data.tbaaOne.childImageSharp.fluid}
        />

        <Img
          className="pb-8 mx-auto shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56"
          fluid={props.data.tbaaTwo.childImageSharp.fluid}
        />

        <Img
          className="pb-8 mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-sm xl:-mt-40"
          fluid={props.data.tbaaThree.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
          Formula One Gym
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Formula One Gym"
          devURL="https://www.formulaonegym.co.uk/"
          devDisplayURL="www.formulaonegym.co.uk"
          devDescription="The original design wasn't awful by any stretch, but probably just a little tired and needed a bit of modernising. The gym market is highly competitive, so the owners were keen to get across to their potential clients their unique selling points and why to use this gym, as well as injecting some colour into the site."
        >
          <IconDeveloper />
          <IconFigma />
        </DesignerWork>

        <div className="relative max-w-3xl absolute-image-wrapper">
          <Img
            className="top-0 left-0 z-0 max-w-3xl shadow-lg absolute-image"
            fluid={props.data.f1Before.childImageSharp.fluid}
          />

          <p className="absolute right-0 z-0 p-3 top-2 bg-brown-standard text-brown-feint">
            Original
          </p>

          <ImageShowHide>
            <Img
              className="top-0 left-0 z-10 max-w-3xl shadow-lg absolute-image"
              fluid={props.data.f1After.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-10 p-3 top-2 bg-brown-standard text-brown-feint">
              New
            </p>
          </ImageShowHide>
        </div>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-sm xl:max-w-md"
          fluid={props.data.f1Three.childImageSharp.fluid}
        />

        <Img
          className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-lg xl:-mt-36"
          fluid={props.data.f1Two.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
        Effico
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Effico Ltd"
          devURL="https://www.effico.ltd/"
          devDisplayURL="www.effico"
          devDescription="With no current website, Effico Ltd needed a digital online presence. A website was made that was designed to attract both domestic and commercial customers, all designed with conversion and SEO in mind."
        >
          <IconDeveloper />
          <IconFigma />
        </DesignerWork>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:max-w-md xl:max-w-xl"
          fluid={props.data.efficoOne.childImageSharp.fluid}
        />

        <Img
          className="pb-8 mx-auto shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56"
          fluid={props.data.efficoTwo.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
          Sheringham Flooring
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Sheringham Flooring"
          devURL="https://www.sheringhamflooring.com/"
          devDisplayURL="www.sheringhamflooring.com"
          devDescription="An old WordPress theme that wasn't really maintained and had no real character was replaced with a fresh, new design that helped showcase the extent of work the company can carry out. Designed to convert visitors into enquiries and be SEO friendly, Sheringham Flooring is looking to become the main contender in the region for flooring."
        >
          <IconDeveloper />
          <IconFigma />
        </DesignerWork>

        <div className="relative max-w-3xl absolute-image-wrapper">
          <Img
            className="top-0 left-0 z-0 max-w-3xl shadow-lg absolute-image"
            fluid={props.data.sherFloorBefore.childImageSharp.fluid}
          />

          <p className="absolute right-0 z-0 p-3 top-2 bg-brown-standard text-brown-feint">
            Original
          </p>

          <ImageShowHide>
            <Img
              className="top-0 left-0 z-10 max-w-3xl shadow-lg absolute-image"
              fluid={props.data.sherFloorAfter.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-10 p-3 top-2 bg-brown-standard text-brown-feint">
              New
            </p>
          </ImageShowHide>
        </div>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-sm xl:max-w-md"
          fluid={props.data.sherFloorOne.childImageSharp.fluid}
        />

        <Img
          className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-lg xl:-mt-36"
          fluid={props.data.sherFloorTwo.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
          Shantymen
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Sheringham Shantymen"
          devURL="https://www.shantymen.com/"
          devDisplayURL="www.shantymen.com"
          devDescription="This was a redesign of my own work, originally built circa 2015. The functionality and layout of the site was tired, so a fresh redesign and build was needed to keep the group's internet presence professional and modern. A tip of the hat to George Wood for the font assist."
        >
          <IconDeveloper />
          <IconAdobeXD />
        </DesignerWork>

        <div className="relative max-w-3xl absolute-image-wrapper">
          <Img
            className="top-0 left-0 z-0 max-w-3xl shadow-lg absolute-image"
            fluid={props.data.shantymenBefore.childImageSharp.fluid}
          />

          <p className="absolute right-0 z-0 p-3 top-2 bg-brown-standard text-brown-feint">
            Original
          </p>

          <ImageShowHide>
            <Img
              className="top-0 left-0 z-10 max-w-3xl shadow-lg absolute-image"
              fluid={props.data.shantymenOne.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-10 p-3 top-2 bg-brown-standard text-brown-feint">
              New
            </p>
          </ImageShowHide>
        </div>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-xl"
          fluid={props.data.shantymenTwo.childImageSharp.fluid}
        />

        <Img
          className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56"
          fluid={props.data.shantymenThree.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
          Shantymen
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Sheringham Lifeboat"
          devURL="https://www.sheringhamlifeboat.co.uk/"
          devDisplayURL="www.sheringhamlifeboat.co.uk"
          devDescription="An old school, left aligned site was the predecessor, and even in 2014 it was looking very dated. Sheringham Lifeboat are lucky to be aligned with a professional photographer, so taking their photos and working up a new design was a simple enough process."
        >
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <div className="relative max-w-3xl absolute-image-wrapper">
          <Img
            className="top-0 left-0 z-0 max-w-3xl shadow-lg absolute-image"
            fluid={props.data.sheringhamlifeboatBefore.childImageSharp.fluid}
          />

          <p className="absolute right-0 z-0 p-3 top-2 bg-brown-standard text-brown-feint">
            Original
          </p>

          <ImageShowHide>
            <Img
              className="top-0 left-0 z-10 max-w-3xl shadow-lg absolute-image"
              fluid={props.data.sheringhamlifeboatOne.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-10 p-3 top-2 bg-brown-standard text-brown-feint">
              New
            </p>
          </ImageShowHide>
        </div>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-auto"
          fluid={props.data.sheringhamlifeboatTwo.childImageSharp.fluid}
        />

        <div className="max-w-3xl pb-10 border-b border-orange-800"></div>

        {/* 
          --------------------------------------------------------
          Arcadia
          --------------------------------------------------------
        */}

        <DesignerWork
          devTitle="Arcadia Physiotherapy"
          devURL="https://arcadia-therapy.com/"
          devDisplayURL="arcadia-therapy.com"
          devDescription="Arcadia's design had become dated, sporting some odd behaviours and broken layouts over years of changes and updates. Arcadia wanted a fresh design to begin their 2019, but also something easy to use for their existing clientele."
        >
          <IconDeveloper />
          <IconPhotoshop />
        </DesignerWork>

        <div className="relative max-w-3xl absolute-image-wrapper">
          <Img
            className="top-0 left-0 z-0 max-w-3xl shadow-lg absolute-image"
            fluid={props.data.arcadiaBefore.childImageSharp.fluid}
          />

          <p className="absolute right-0 z-0 p-3 top-2 bg-brown-standard text-brown-feint">
            Original
          </p>

          <ImageShowHide>
            <Img
              className="top-0 left-0 z-10 max-w-3xl shadow-lg absolute-image"
              fluid={props.data.arcadiaOne.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-10 p-3 top-2 bg-brown-standard text-brown-feint">
              New
            </p>
          </ImageShowHide>
        </div>

        <Img
          className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-xl"
          fluid={props.data.arcadiaTwo.childImageSharp.fluid}
        />

        <Img
          className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56"
          fluid={props.data.arcadiaThree.childImageSharp.fluid}
        />
      </div>
    </Wrapper>
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
`

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
    f1Before: file(relativePath: { eq: "designs/f1-before.jpg" }) {
      ...fluidImageDesigner
    }
    f1After: file(relativePath: { eq: "designs/f1-after.jpg" }) {
      ...fluidImageDesigner
    }
    f1Two: file(relativePath: { eq: "designs/f1-2.jpg" }) {
      ...fluidImageDesigner
    }
    f1Three: file(relativePath: { eq: "designs/f1-3.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenBefore: file(
      relativePath: { eq: "designs/shantymen-before.jpg" }
    ) {
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
    sheringhamlifeboatBefore: file(
      relativePath: { eq: "designs/sheringham-lifeboat-before.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatOne: file(
      relativePath: { eq: "designs/sheringham-lifeboat-01.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatTwo: file(
      relativePath: { eq: "designs/sheringham-lifeboat-02.jpg" }
    ) {
      ...fluidImageDesigner
    }
    arcadiaBefore: file(
      relativePath: { eq: "designs/arcadia-therapy-before.jpg" }
    ) {
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
    efficoOne: file(relativePath: { eq: "designs/effico-01.jpg" }) {
      ...fluidImageDesigner
    }
    efficoTwo: file(relativePath: { eq: "designs/effico-02.jpg" }) {
      ...fluidImageDesigner
    }
    sherFloorBefore: file(relativePath: { eq: "designs/sheringhamflooring-before.jpg" }) {
      ...fluidImageDesigner
    }
    sherFloorAfter: file(relativePath: { eq: "designs/sheringhamflooring-after.jpg" }) {
      ...fluidImageDesigner
    }
    sherFloorOne: file(relativePath: { eq: "designs/sheringhamflooring-01.jpg" }) {
      ...fluidImageDesigner
    }
    sherFloorTwo: file(relativePath: { eq: "designs/sheringhamflooring-02.jpg" }) {
      ...fluidImageDesigner
    }
  }
`
