module.exports = {
  siteMetadata: {
    title: `Sean Jones | front end web developer`,
    description: `I am a Glasgow based front end developer. I specialise in client-side development, responsive design, accessibility and web standards.`,
    author: `@cssmonkey`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Jones - front end developer`,
        short_name: `SeanJones`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#002e43`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`],
            },
          ],
        },
      },
    },
  ],
};
