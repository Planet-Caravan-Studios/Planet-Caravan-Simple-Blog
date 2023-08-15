/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/',
  sw: 'service-worker.js'
})

module.exports = withPWA({
  // next.js config
  /* config options here */

  //IMAGE LOADER
  images: {
    unoptimized: true,
  },

  //TRAILING SLASHES
  trailingSlash: true,

  //REDIRECTS
  async redirects() {
    return [
      {
        source: '/redirect-test',
        destination: '/',
        permanent: true,
      },
    ]
  }

})

