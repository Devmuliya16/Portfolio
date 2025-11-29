/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["res.cloudinary.com"],
    },
    i18n: {
      locales: ['en', 'fr', 'de'],
      defaultLocale: 'en',
      localeDetection: true,
    },
}

module.exports = nextConfig
