module.exports = {
  siteMetadata: {
    title: `Zellement.com`,
    description: `Online presence of Dan Farrow`,
    author: `@Zellement`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cormorant SC', 'PT Sans']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-18086836-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#141210`,
        theme_color: `#b5aba2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
