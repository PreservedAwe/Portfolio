/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    experimental: {
        instrumentationHook: true,
    },
};



export default nextConfig;
