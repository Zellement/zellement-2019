import React from "react"
import { Helmet } from 'react-helmet'
import Header from "./Header"
import Footer from "./Footer"
import Layout from "./Layout"
import { StaticQuery, graphql } from "gatsby"
import '../css/master.css'

const Wrapper = ({ classProps, children, seoTitle, seoDescription }) => (
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
			<title>{seoTitle ? seoTitle : data.site.siteMetadata.title}</title>
			<meta name="description" content={seoDescription ? seoDescription : data.site.siteMetadata.description} />
			<meta name="theme-color" content="#b5aba2" />
			<meta property="og:type" content="business.business" />
			<meta property="og:title" content={data.site.siteMetadata.title} />
			<meta property="og:url" content="/" />
			<meta property="og:image" content="./src/images/favicon.ico" />
      <body />
		</Helmet>
      <div className="md:flex md:flex-wrap md:justify-end">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={"md:w-2/3 lg:w-3/4"}>
          <div className={classProps}>
          <Layout>
          {children}
          </Layout>
          </div>
        </main>
      </div>
      <Footer />
      </>
    )}
  />
)

export default Wrapper