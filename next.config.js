/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/tools', permanent: true },
      { source: '/word-counter', destination: '/tools/word-counter', permanent: true },
      { source: '/character-counter', destination: '/tools/character-counter', permanent: true },
      { source: '/ai-detector', destination: '/tools/ai-detector', permanent: true },
      { source: '/grammar-checker', destination: '/tools/grammar-checker', permanent: true },
      { source: '/case-converter', destination: '/tools/case-converter', permanent: true },
      { source: '/invoice-generator', destination: '/tools/invoice-generator', permanent: true },
      { source: '/reading-time', destination: '/tools/reading-time', permanent: true },
      { source: '/roi-calculator', destination: '/tools/roi-calculator', permanent: true },
      { source: '/salary-hourly-converter', destination: '/tools/salary-hourly-converter', permanent: true },
      { source: '/lorem-ipsum-generator', destination: '/tools/lorem-ipsum-generator', permanent: true },
      { source: '/password-generator', destination: '/tools/password-generator', permanent: true },
      { source: '/hashtag-generator', destination: '/tools/hashtag-generator', permanent: true },
      { source: '/resume-scorer', destination: '/tools/resume-scorer', permanent: true },
      { source: '/headline-analyzer', destination: '/tools/headline-analyzer', permanent: true },
      { source: '/markdown-to-html', destination: '/tools/markdown-to-html', permanent: true },
    ];
  },
};


module.exports = nextConfig;
