require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Neko`,
    siteTitleAlt: `Neko - TKHC Cattery`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `About`, slug: `/about` },
          { name: `Cattery`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1937607226`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neko - tkhc cattery`,
        short_name: `neko`,
        description: `A cats gallery.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
