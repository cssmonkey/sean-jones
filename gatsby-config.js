module.exports = {
  siteMetadata: {
    title: `Sean Jones | front end web developer`,
    description: `I am a Glasgow based front end developer. I specialise in client-side development, responsive design, accessibility and web standards.`,
    author: `@cssmonkey`,
    siteUrl: `https://www.sean-jones.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Jones - front end developer`,
        short_name: `SeanJones`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#002e43`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
