const withTM = require('next-transpile-modules')(['got', 'notion-client']);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: false,
  },
  // This line ensures MDX files are recognized as pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withTM(withMDX(nextConfig));