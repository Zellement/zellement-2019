import React from "react"

import Helmet from 'react-helmet'
import Header from "./Header"
import Footer from "./Footer"
import { StaticQuery, graphql } from "gatsby"
import '../css/master.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
		<Helmet>
			<html lang="en" />
			<title>{data.site.siteMetadata.title}</title>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="theme-color" content="#172957" />
			<meta property="og:type" content="business.business" />
			<meta property="og:title" content={data.site.siteMetadata.title} />
			<meta property="og:url" content="/" />
			<meta property="og:image" content="./src/img/logo-badge.jpg" />
		</Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

export default Layout