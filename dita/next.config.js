/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  images: {
    // accepted domains for pictures
    domains: ['links.papareact.com']
  },

    // THIS FILE SHOULD NOT HAVE ANY PRIVATE KEYS
    // MAKE SURE IT IS A PUBLIC KEY
  env: {
    mapbox_key: 'pk.eyJ1Ijoia3ZsMDEiLCJhIjoiY2w3MnFhd3luMTBuNDQxbGN1czduMDhraiJ9.doySCvaOVGg7aJlrZd6Exw'
  }

}
