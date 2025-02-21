// apps/task-manager/next.config.js
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Add basePath if you're not using a custom domain
  // basePath: '/your-repo-name',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@finster-ai/ui-components': path.resolve(
        __dirname,
        '../../libs/shared/ui-components/src/index.ts'
      ),
    };
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
