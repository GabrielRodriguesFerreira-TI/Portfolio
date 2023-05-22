/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fmd-storage.s3.amazonaws.com", "avatars.githubusercontent.com"],
        loader: "default"
    }
}

module.exports = nextConfig
