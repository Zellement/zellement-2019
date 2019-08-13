import React from "react"
import Helmet from 'react-helmet'
import Header from "./Header"
import Footer from "./Footer"
import { StaticQuery, graphql } from "gatsby"
import '../css/master.css'

const Layout = ({ classProps, children }) => (
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
      <body />
		</Helmet>
      <div className="md:flex md:flex-wrap md:justify-end">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={"md:w-2/3 lg:w-3/4 overflow-hidden"}>
          <div className={classProps}>
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