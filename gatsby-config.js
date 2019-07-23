module.exports = {
  siteMetadata: {
    title: 'Furkan Üzmez',
    description: 'Engineer',
    author: '@uzmezfurkan',
    navLinks: [
      { name: 'About Me', path: '/' },
      { name: 'Relevant Experience', path: '/relevant-experience' },
      { name: 'Showcase', path: '/showcase' },
      { name: 'Talks & OSS', path: '/talks-open-source' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Furkan Üzmez',
        short_name: 'Furkan',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/furkan-pp.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
};
