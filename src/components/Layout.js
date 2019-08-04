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
			<meta name="theme-color" content="#b5aba2" />
			<meta property="og:type" content="business.business" />
			<meta property="og:title" content={data.site.siteMetadata.title} />
			<meta property="og:url" content="/" />
			<meta property="og:image" content="./src/images/favicon.ico" />
      		<body className="" />
		</Helmet>
      <div className="md:flex md:flex-wrap md:justify-end">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="pt-8 mt-12 md:mt-0 md:w-2/3 lg:w-3/4">
          <div className="container mx-auto px-4 md:p-10 lg:p-16 lg:pr-0">
          {children}
          </div>
        </main>
      </div>
      <Footer />
      </>
    )}
  />
)

export default Layout