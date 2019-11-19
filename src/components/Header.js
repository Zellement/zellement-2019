import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Logo from "./Logo"
import Navigation from "./Navigation"
import Img from 'gatsby-image';

//npx gatsby-source-spotify token <clientId> <clientToken>

export default  () => (
	<StaticQuery
	  query={graphql`
	  query MyQuery {
		allSpotifyTopTrack(sort: {fields: order, order: ASC}, limit: 3) {
		  edges {
			node {
			  id
			  name
			  order
			  album {
				artists {
				  name
				}
				name
			  }
			  image {
				localFile {
				  id
				  childImageSharp {
					fixed(width: 42) {
						...GatsbyImageSharpFixed_withWebp
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	  
	  `}
	  
	  render={data => (
		<header className="block fixed bg-brown-standard z-50 top-0 left-0 w-full md:w-1/3 lg:w-1/4 md:h-full md:flex md:justify-between md:flex-col">
			<div className="container mx-auto">
				<Logo />
				<Navigation />
			</div>

			<div className="hidden md:block text-right p-4 opacity-25 transition-fast hover:opacity-100">

				<p className="uppercase text-white mb-4 text-md tracking-wider font-color-font">Recent Top Tracks</p>
			{
				data.allSpotifyTopTrack.edges.map(spotifyData => (
				<div className="mt-2 flex justify-end" key={spotifyData.node.id}>
					<div className="text-right my-auto pr-2">
						<span className="uppercase text-white text-sm tracking-wider font-color-font">
							{spotifyData.node.album.artists.map(albumData => (
								<>
								{albumData.name}
								</>
							))}
						</span>
						<span className="text-xs block uppercase tracking-wider font-color-font">
							{spotifyData.node.name}
						</span>
					</div>
					<Img className="block" fixed={spotifyData.node.image.localFile.childImageSharp.fixed} />
				</div>
				))
			}
			</div>

		</header>
	  )}
	/>
  )