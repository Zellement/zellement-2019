module.exports = {
  siteMetadata: {
    title: "Zellement.com",
    titleTemplate: "%s · Web Developer Nottingham",
    author: `@Zellement`,
    description:
      "Online presence of Dan Farrow - Web Designer & Web Developer",
    url: "https://www.zellement.com", // No trailing slash allowed!
    twitterUsername: "@Zellement",
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
/*    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/pages/index.js`),
      },
    },*/
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `b63eb9eb58984e24b561afba8cca15d6`,
        clientSecret: `9341a11211634fed9dc4e8517753f09e`,
        refreshToken: `AQBvUXU8z0boJNY3jzrqDGtbcnY0pwkOsPe8t6zWyo1tLWHvpj1oba4xv0wJ-9C5ot3FGPIkPwQcJV8DlnP6cNDsV6SsKHDRyRpCgNAm2jciDDjoRnygRixtStyfV_GCcwc`,
    
        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, 
        whitelistPatterns: [/is-active/],
      }
    },
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
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
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
