/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'cheers.okhub.tech',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'ha-giang-tour.s3-accelerate.amazonaws.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'ha-giang-tour.s3.ap-southeast-1.amazonaws.com',
      // },
      //domains:['cheers.okhub.tech','ha-giang-tour.s3-accelerate.amazonaws.com','ha-giang-tour.s3.ap-southeast-1.amazonaws.com']
      { protocol: 'https', hostname: '**' },
    ],
  },
}

module.exports = nextConfig
