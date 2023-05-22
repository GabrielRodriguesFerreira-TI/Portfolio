/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        domains: ["fmd-storage.s3.amazonaws.com", "avatars.githubusercontent.com"],
        loader: "default"
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        precision: 6
    }
}

module.exports = nextConfig
