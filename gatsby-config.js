module.exports = {
  siteMetadata: {
    title: `Sean Jones | front end web developer`,
    description: `I am a Glasgow based front end developer. I specialise in client-side development, responsive design, accessibility and web standards.`,
    author: `@cssmonkey`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
}
