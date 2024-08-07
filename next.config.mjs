/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEB3_PUBLIC_ACCESS_KEY: process.env.WEB3_PUBLIC_ACCESS_KEY,
    },
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "/:path*",
            },
            {
                source: "/",
                destination: "/",
            }
        ]
    }
};

export default nextConfig;
