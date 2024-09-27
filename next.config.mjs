/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    // config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  modularizeImports: {
    '@radix-ui/react-dropdown-menu': {
      transform: '@radix-ui/react-dropdown-menu/{{member}}',
    },
    '@radix-ui/react-tabs': {
      transform: '@radix-ui/react-tabs/{{member}}',
    },
    '@radix-ui/react-tooltip': {
      transform: '@radix-ui/react-tooltip/{{member}}',
    },
    '@headlessui/react': {
      transform: '@headlessui/react/{{member}}',
    },
    '@hookform/resolvers': {
      transform: '@hookform/resolvers/{{member}}',
    },
    'react-select': {
      transform: 'react-select/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/{{member}}',
    }
  }
};

export default bundleAnalyzer(nextConfig);
