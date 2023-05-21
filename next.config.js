/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fmd-storage.s3.us-east-1.amazonaws.com"],
        loader: "default"
    }
}

module.exports = nextConfig
