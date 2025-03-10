/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    experimental: {
        instrumentationHook: true,
    },
    reactStrictMode: false,
};



export default nextConfig;
