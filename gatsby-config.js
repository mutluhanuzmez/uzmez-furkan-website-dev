module.exports = {
  siteMetadata: {
    title: 'Furkan Üzmez',
    description: 'E&E Engineer,Ms.Eng Student-IT',
    author: '@uzmezfurkan',
    navLinks: [
      { name: 'Motivation', path: '/' },
      { name: 'Experience', path: '/experience' },
      { name: 'Memories', path: '/memories' },
      { name: 'Warehouse', path: '/warehouse' },
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
