/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "velog.velcdn.com",
      "joshua1988.github.io",
      "4.bp.blogspot.com",
      "upload.wikimedia.org",
      "goodgid.github.io",
      "i.ytimg.com",
      "logicmojo.com",
      "inpa.tistory.com",
      "gmlwjd9405.github.io",
      "images.velog.io",
      "4.bp.blogspot.com",
      "user-images.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
