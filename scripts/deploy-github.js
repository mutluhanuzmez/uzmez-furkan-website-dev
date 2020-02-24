const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    //repo: 'https://github.com/anadolueem/furkanuzmez.git',
    repo: 'https://github.com/furkanuzmez/furkanuzmez.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)