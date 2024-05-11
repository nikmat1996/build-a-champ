/** @type {import('next').NextConfig} */

const getLinkPermissions = (list) => {
  const res = list.map((item) => ({
      protocol: "https",
      hostname: item,
      port: "",
      pathname: "/**"
  }));
  return res;
};

const nextConfig = {
  images: {
      remotePatterns: [
          ...getLinkPermissions([
              "i.pinimg.com",
              "images.pexels.com",
          ])
      ]
  }}



module.exports = nextConfig;
