/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    experimental: {
        instrumentationHook: true,
    },
    trustProxy: true,
};



export default nextConfig;
