/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_PUBLIC_API_PROTOCOL,
                hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
                port: process.env.NEXT_PUBLIC_API_PORT,
                pathname: process.env.NEXT_PUBLIC_API_MEDIA_PATHNAME
            },
        ]
    }
};

export default nextConfig;
