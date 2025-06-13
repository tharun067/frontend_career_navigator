/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'scontent.fhyd10-1.fna.fbcdn.net',
            },
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
            },
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config;
    },
};

export default nextConfig;
