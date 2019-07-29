import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({image}) => {
	console.log(image);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "designs/arcadia-therapy-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image