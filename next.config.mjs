/** @type {import('next').NextConfig} */
const nextConfig = {
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
